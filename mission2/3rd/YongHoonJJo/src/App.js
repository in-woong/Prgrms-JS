import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import { validateConstructor, isStateEqual, validateArray, validateState } from './utils.js'

function App(element, title='sample') {
  validateConstructor.call(this)
  if(!element) throw new Error(`There is no element`)

  this.title = title
  this.$appComponent = element  
  this.todoInput = new TodoInput()
  this.todoList = new TodoList()
  this.todoCount = new TodoCount()
  
  this.$appComponent.appendChild(this.todoInput.$inputComponent)
  this.$appComponent.appendChild(this.todoList.$todoListComponent)
  this.$appComponent.appendChild(this.todoCount.$countComponent)

  const todos = window.localStorage.getItem(this.title)
  this.todos = (todos && JSON.parse(todos)) || []

  this.init()
}

App.prototype.init = function() {
  this.todoList.addState = this.addState.bind(this)
  this.todoList.toggleState = this.toggleState.bind(this)
  this.todoList.removeState = this.removeState.bind(this)
  this.todoList.removeAllState = this.removeAllState.bind(this)
  this.bindEvents()
  this.render()
}

App.prototype.addState = function(text) {
  const nextTodos = [...this.todos]
  const newTodo = {
    text,
    isCompleted: false,
  }
  nextTodos.push(newTodo)
  this.setState(nextTodos)
}

App.prototype.toggleState = function(index) {
  const nextTodos = this.todos.map((todo, idx) => {
    return idx === index ? {...todo, isCompleted: !todo.isCompleted} : todo
  })
  this.setState(nextTodos)
}

App.prototype.removeState = function(index) {
  const nextTodos = [...this.todos]
  nextTodos.splice(index, 1)
  this.setState(nextTodos)
}

App.prototype.removeAllState = function() {
  this.setState([])
}

App.prototype.setState = function(nextTodos) {
  validateArray(nextTodos) 
  nextTodos = validateState(nextTodos, ['text'])
  
  if(!isStateEqual(this.todos, nextTodos)) {
    window.localStorage.setItem(this.title, JSON.stringify(nextTodos))
    this.todos = nextTodos
    this.render()
  }
}

App.prototype.bindEvents = function() {
  function addStateLogic() {
    const inputText = this.todoInput.$inputElem.value
    if(inputText === '') return

    this.addState(inputText)
    this.todoInput.$inputElem.value = ''
    this.todoInput.$inputElem.focus()
  }

  this.todoInput.$buttonElem.addEventListener('click', () => {
    addStateLogic.call(this)
  })

  this.todoInput.$inputElem.addEventListener('keyup', (e) => {
    const ENTER = 13
    if(e.keyCode === ENTER) {
      addStateLogic.call(this)
    }
  })

  this.todoInput.$removeAllBtnElem.addEventListener('click', (e) => {
    const evt = new CustomEvent('@removeAll')
    this.todoList.$todoListComponent.dispatchEvent(evt)
  })
}

App.prototype.render = function() {
  this.todoList.render(this.todos)
  this.todoCount.render(this.todos)
}

export default App