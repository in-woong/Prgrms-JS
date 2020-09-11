import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'

function App(element) {
  const $app = element

  this.$removeAll = document.querySelector('#todo-remove-all-button')
  this.data = []

  this.init = function () {
    this.todoInput = new TodoInput(addTodo)
    this.todoList = new TodoList(this.data, toggleTodo, deleteTodo)
  }

  const addTodo = (newTodo) => {
    this.data.push(newTodo)
    this.todoList.setState(this.data)
  }

  const toggleTodo = (todoIndex) => {
    this.data[todoIndex].isCompleted = !this.data[todoIndex].isCompleted
    console.log(this.data)
    this.todoList.setState(this.data)
  }

  const deleteTodo = (index) => {
    this.data.splice(index, 1)
    this.todoList.setState(this.data)
  }

  this.$removeAll.addEventListener('click', () => {
    event.stopPropagation()
    this.data = []
    this.todoList.setState(this.data)
  })

  this.init()
}

export default App
