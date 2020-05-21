import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import { USERNAME } from './constant.js'
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from './api.js'

function App() {
  const onAddTodo = async (text) => {
    await addTodo(this.username, { content: text })
    this.setState(this.username)
  }

  const onToggleTodo = async (index) => {
    const todo = this.todos[index]
    const id = todo._id

    todo.isCompleted = !todo.isCompleted

    await toggleTodo(this.username, id)
    this.setState(this.username)
  }

  const onDeleteTodo = async (index) => {
    const id = this.todos[index]._id
    this.todos.splice(index, 1)

    await deleteTodo(this.username, id)
    this.setState(this.username)
  }

  this.setState = async function (username) {
    this.username = username

    this.todos = await fetchTodos(this.username)
    this.todoList.setState(this.todos)
    this.todoCount.setState(this.todos)
  }

  this.init = async function () {
    this.username = USERNAME
    this.todos = []

    this.$todos = document.querySelector('#todos')
    this.$todoInput = document.querySelector('#todo-input')
    this.$todoCount = document.querySelector('#todo-count')

    try {
      this.todoList = new TodoList(
        this.todos,
        this.$todos,
        onToggleTodo,
        onDeleteTodo
      )
      this.todoInput = new TodoInput(this.$todoInput, onAddTodo)
      this.todoCount = new TodoCount(this.todos, this.$todoCount)
    } catch (err) {
      console.log(err)
    }

    this.setState(this.username)
  }

  this.init()
}

export default App
