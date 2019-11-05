import TodoList from './component/TodoList.js'
import TodoInput from './component/TodoInput.js'
import TodoCount from './component/TodoCount.js'
import { validator, validTodoData, storage } from './utils.js'
import { ERROR_KEY, ERROR_MESSAGE, throwError } from './error.js'

function TodoApp({ el, query, title = 'title!!', name}) {
  if (validator.isNotUseNew(this)) {
    throwError(ERROR_KEY.ERROR009, ERROR_MESSAGE.IS_NOT_USE_NEW)
  }
  if (validator.isNotAvailableElement({ query, el })) {
    throwError(ERROR_KEY.ERROR008, ERROR_MESSAGE.IS_NOT_AVAILABLE_ELEMENT)
  }
  
  this.todos = []
  this.query = query
  this.$el = el || document.querySelector(query)
  this.title = title
  this.name = name
  
  this.todoList = new TodoList(this.$el, this.todos, this.removeAllData.bind(this))
  this.todoInput = new TodoInput(this.$el)
  this.todoCount = new TodoCount(this.$el, this.todos)

  this.init()
}

TodoApp.prototype.init = function() {
  const storageData = this.getStorageData()
  this.setState(storageData)

  this.render()
  this.bindEvent()
}

TodoApp.prototype.getStorageData = function() {
  try {
    const localStorageData = storage.get(this.name)
    const parseData = JSON.parse(localStorageData)
    validTodoData(parseData)
    return parseData
  } catch(err) {
    return []
  }
}

TodoApp.prototype.render = function() {
  this.$el.innerHTML = this.title ? `<span class="todo-title">${this.title}</span>` : ''
  this.todoInput.render()
  this.todoList.render()
  this.todoCount.render()
}

TodoApp.prototype.bindEvent = function() {
  const { $el, todoInput, todoList } = this
  const { $form, $input, $buttonAdd, $buttonRemoveAll } = todoInput
  const { $list } = todoList

  $form.addEventListener('submit', e => {
    e.preventDefault()
    const value = $el.querySelector(`.${$input.className}`).value
    this.addTodoData(value)
  })

  $form.addEventListener('click', e => {
    const thisClassName = e.target.className
    if (thisClassName === $buttonRemoveAll.className) {
      e.preventDefault()
      const eventRemoveAll = new CustomEvent('remove-all')
      this.todoList.$list.dispatchEvent(eventRemoveAll);
    }
  })

  $list.addEventListener('click', e => {
    e.preventDefault()
    const liEl = e.path.find(({ tagName }) => tagName === 'LI')

    if (liEl) {
      const targetEl = e.target
      const id = liEl.id.split('-')[1]

      if (isConditionToRemoveData(targetEl)) {
        this.removeTodoData(liEl.dataset.index)
      } else if (isConditionToToggleIsCompleted(targetEl)) {
        this.toggleIsCompleted(id)
      }
    }
  })

  const isConditionToRemoveData = function(element) {
    const className = element.className
    return className === 'btn-remove-todo'
  }
  const isConditionToToggleIsCompleted = function(element) {
    const className = element.className
    const parentClassName = element.parentElement.className
    const isCheckBox = className === 'check-todo'
    const isSpan = className === 'text-todo' || parentClassName === 'text-todo'
    const isLi = className === 'todo-li'
    return isCheckBox || isSpan || isLi
  }
}

TodoApp.prototype.setState = function(nextData) {
  validTodoData(nextData)
  storage.set(this.name, JSON.stringify(nextData))
  this.todos = nextData
  this.todoList.setState(nextData)
  this.todoCount.setState(nextData)
}

TodoApp.prototype.addTodoData = function(value) {
  if (validator.isNullOrUndefinedData(value.replace(/ /g, ''))) {
    throwError(ERROR_KEY.ERROR006, ERROR_MESSAGE.IS_NULL_OR_UNDEFINED)
  }
  const newData = this.todos.map(item => { return { ...item } })
  const date = new Date()
  const id = `${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`

  newData.push({
    id: id,
    text: value,
    isCompleted: false
  })
  this.setState(newData)
  this.todoInput.reset()
}

TodoApp.prototype.toggleIsCompleted = function(itemId) {
  const newData = this.todos.map(item => {
    const newObj = { ...item }
    if (newObj.id === itemId) {
      newObj.isCompleted = !newObj.isCompleted
    }
    return newObj
  })
  this.setState(newData)
}

TodoApp.prototype.removeTodoData = function (index) {
  const newData = [...this.todos]
  newData.splice(index, 1)
  this.setState(newData)
}

TodoApp.prototype.removeAllData = function() {
  this.setState([])
}

export default TodoApp