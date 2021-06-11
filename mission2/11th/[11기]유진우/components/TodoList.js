import validator from '../validators/todoValidator.js'
import generateUniqueID from '../utils/generateUniqueID.js'
import todoItem from '../todoItem.js'

function TodoList($target, initialState) {
  if (!new.target) throw new Error('new 키워드를 사용해야합니다.')
  validator(initialState)

  this.state = initialState
  this.$target = $target
  this.$todoList = document.createElement('ul')
  this.$todoList.id = 'todo-list'
  this.$todoList.addEventListener('click', (e) => {
    this.onHandleClick(e)
  })

  this.$target.appendChild(this.$todoList)

  this.onHandleClick = (e) => {
    const $todoItem = e.target.closest('li')

    if (e.target.className === 'todo-text' || e.target.tagName === 'S') {
      this.toggleTodoIsCompleted($todoItem.dataset.id)
    }

    if (e.target.className === 'todo-delete-btn') {
      this.deleteTodo($todoItem.dataset.id)
    }
  }

  this.addTodo = (todoText) => {
    const todo = { id: generateUniqueID(), text: todoText, isCompleted: false }
    const nextTodo = [...this.state, todo]
    this.setState(nextTodo)
  }

  this.deleteTodo = (todoID) => {
    const nextState = this.state.filter((todo) => todo.id !== todoID)
    this.setState(nextState)
  }

  this.toggleTodoIsCompleted = (todoID) => {
    const nextState = this.state.map((todo) => {
      return todo.id === todoID ? { ...todo, isCompleted: !todo.isCompleted } : todo
    })
    this.setState(nextState)
  }

  this.setState = (nextState) => {
    validator(nextState)
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$todoList.innerHTML = this.state.map((todo) => todoItem(todo)).join('')
  }
}

export default TodoList
