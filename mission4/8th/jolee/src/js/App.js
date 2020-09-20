import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import { setStorage, getStorageData } from './storage.js'

function App(element) {
  const $app = element

  this.$removeAllButton = document.querySelector('#todo-remove-all-button')
  this.data = getStorageData({ key: 'data' }) || []

  this.init = function () {
    this.todoInput = new TodoInput(addTodo)
    this.todoList = new TodoList(this.data, toggleTodo, deleteTodo)
  }

  this.setState = (data) => {
    this.todoList.setState(data)
    setStorage({ key: 'data', value: data })
  }

  const addTodo = (newTodo) => {
    this.data.push(newTodo)
    this.setState(this.data)
  }

  const toggleTodo = (todoIndex) => {
    this.data[todoIndex].isCompleted = !this.data[todoIndex].isCompleted
    this.setState(this.data)
  }

  const deleteTodo = (index) => {
    this.data.splice(index, 1)
    this.setState(this.data)
  }

  this.$removeAllButton.addEventListener('click', () => {
    event.stopPropagation()
    this.setState([])
  })

  this.init()
}

export default App
