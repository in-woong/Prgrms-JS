import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'

function App(element) {
  const $app = element
  this.data = []

  this.init = function () {
    this.todoInput = new TodoInput(this.addTodo)
    this.todoList = new TodoList(this.toggleTodo, this.deleteTodo)
  }

  this.addTodo = (newTodo) => {
    this.data.push(newTodo)
    this.todoList.setState(this.data)
  }

  this.toggleTodo = ($todoItem, index) => {
    this.data[index].isCompleted = !this.data[index].isCompleted
    this.todoList.toggleItem($todoItem, index)
  }

  this.deleteTodo = (index) => {
    this.data.splice(index, 1)
    this.todoList.deleteItem(index)
  }
  this.init()
}

export default App
