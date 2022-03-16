import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import {
  checkDataValidation,
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from './utils.js'

function App($element) {
  this.state = getDataFromLocalStorage() || []

  this.setState = (nextData = []) => {
    if (!checkDataValidation(nextData)) throw new Error('Data Invalid!')
    this.state = nextData
    setDataToLocalStorage(nextData)
    todoList.setState(nextData)
    todoCount.setState(nextData)
  }

  this.addTodo = (newTodo) => {
    this.setState([...this.state, newTodo])
  }
  this.modifyTodo = (newTodoList) => {
    this.setState([...newTodoList])
  }

  this.render = () => {
    $element.innerHTML = `
    <div id="todo-input"></div>
    <div id="todo-list"></div>
    <div id="todo-count"></div>
    `
  }
  this.render()

  new TodoInput(document.getElementById('todo-input'), this.addTodo)
  const todoList = new TodoList(
    document.getElementById('todo-list'),
    this.state,
    this.modifyTodo
  )
  const todoCount = new TodoCount(
    document.getElementById('todo-count'),
    this.state
  )

  $element.addEventListener('removeAll', (event) => {
    this.setState()
  })
}

new App(document.getElementById('root'))
