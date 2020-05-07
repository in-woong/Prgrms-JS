import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'

function App() {
  const saveTodos = () => {
    try {
      localStorage.setItem('TODOS', JSON.stringify(this.todos))
    } catch (err) {
      console.log(err)
    }
  }

  const loadTodos = () => {
    const loadedTodos = localStorage.getItem('TODOS')
    if (loadedTodos !== null) {
      this.todos = JSON.parse(loadedTodos)
    } else {
      this.todos = []
    }
  }

  const addNewTodo = (text) => {
    const newTodos = [...this.todos, { text, isCompleted: false }]
    this.setState(newTodos)
  }

  const toggleTodo = (id) => {
    const newTodos = [...this.todos]
    newTodos[id].isCompleted = !newTodos[id].isCompleted

    this.setState(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...this.todos]
    newTodos.splice(id, 1)

    this.setState(newTodos)
  }

  this.setState = function (todos) {
    this.todos = todos
    saveTodos()
    this.todoList.setState(todos)
    this.todoCount.setState(todos)
  }

  this.init = function () {
    loadTodos()
  }

  this.render = function () {
    this.$todos = document.querySelector('#todos')
    this.$todoInput = document.querySelector('#todo-input')
    this.$todoCount = document.querySelector('#todo-count')

    try {
      this.todoList = new TodoList(
        this.todos,
        this.$todos,
        toggleTodo,
        removeTodo
      )
      this.todoInput = new TodoInput(this.$todoInput, addNewTodo)
      this.todoCount = new TodoCount(this.todos, this.$todoCount)
    } catch (err) {
      console.log(err)
    }
  }

  this.init()
  this.render()
}

export default App
