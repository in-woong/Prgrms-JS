import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import TodoUsers from './TodoUsers.js'
import { USERNAME, SHOW_USERS, HIDE_USERS } from './constant.js'
import {
  fetchTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  fetchUsers,
} from './api.js'

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

  const onClickUser = (user) => {
    this.setState(user)
  }

  const todoUsersBtnHandler = async (e) => {
    if (e.target.textContent === SHOW_USERS) {
      this.users = await fetchUsers()
      e.target.textContent = HIDE_USERS
    } else {
      this.users = []
      e.target.textContent = SHOW_USERS
    }

    this.todoUsers.setState(this.users)
  }

  this.render = function () {
    this.$title.innerHTML = `${this.username} 할일 목록`
  }

  this.setState = async function (username) {
    this.username = username

    this.todos = await fetchTodos(this.username)
    this.todoList.setState(this.todos)
    this.todoCount.setState(this.todos)
    this.render()
  }

  this.bindEvents = function () {
    this.$todoUsersBtn.addEventListener('click', todoUsersBtnHandler)
  }

  this.init = async function () {
    this.username = USERNAME
    this.todos = []
    this.users = []

    this.$title = document.querySelector('#title')
    this.$todos = document.querySelector('#todos')
    this.$todoInput = document.querySelector('#todo-input')
    this.$todoCount = document.querySelector('#todo-count')
    this.$todoUsersBtn = document.querySelector('#todo-users-btn')
    this.$todoUsers = document.querySelector('#todo-users')

    this.bindEvents()

    try {
      this.todoList = new TodoList(
        this.todos,
        this.$todos,
        onToggleTodo,
        onDeleteTodo
      )
      this.todoInput = new TodoInput(this.$todoInput, onAddTodo)
      this.todoCount = new TodoCount(this.todos, this.$todoCount)
      this.todoUsers = new TodoUsers(this.users, this.$todoUsers, onClickUser)
    } catch (err) {
      console.log(err)
    }

    this.setState(this.username)
  }

  this.init()
}

export default App
