import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import { setLocalStorageData, getLocalStorageData } from './localStorage.js'
import { TODO_KEY } from './constant.js'

function App() {
  const onAddNewTodo = (text) => {
    const newTodos = [...this.todos, { text, isCompleted: false }]
    this.setState(newTodos)
  }

  const onToggleTodo = (id) => {
    const newTodos = [...this.todos]
    newTodos[id].isCompleted = !newTodos[id].isCompleted

    this.setState(newTodos)
  }

  const onRemoveTodo = (id) => {
    const newTodos = [...this.todos]
    newTodos.splice(id, 1)

    this.setState(newTodos)
  }

  this.setState = function (todos) {
    this.todos = todos
    setLocalStorageData(TODO_KEY, todos)
    this.todoList.setState(todos)
    this.todoCount.setState(todos)
  }

  this.init = function () {
    this.todos = getLocalStorageData(TODO_KEY) || []
  }

  this.render = function () {
    this.$todos = document.querySelector('#todos')
    this.$todoInput = document.querySelector('#todo-input')
    this.$todoCount = document.querySelector('#todo-count')

    try {
      this.todoList = new TodoList(
        this.todos,
        this.$todos,
        onToggleTodo,
        onRemoveTodo
      )
      this.todoInput = new TodoInput(this.$todoInput, onAddNewTodo)
      this.todoCount = new TodoCount(this.todos, this.$todoCount)
    } catch (err) {
      console.log(err)
    }
  }

  this.init()
  this.render()
}

export default App
