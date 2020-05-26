import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import Users from './Users.js'
import { fetchTodos, fetchUsers, addTodo, removeTodo, toggleTodo } from './api.js'

export default function App () {
  const userList = new Users({
    $target: document.querySelector('#user-list'),
    users: this.users,
    onClickUser: (user) => {
      this.setState(user)
    },
    $username: document.querySelector('#user-name')
  })

  const todoList = new TodoList({
    $target: document.querySelector('#todo-list'),
    data: this.data,
    onClick: async (id, index) => {
      await toggleTodo(this.username, id)
      this.setState(this.username)
    },
    onRemove: async (id) => {
      await removeTodo(this.username, id)
      this.setState(this.username)
    },
  })

  const todoInput = new TodoInput({
    $target: document.querySelector('#todo-input'),
    onAddTodo: async (todoText) => {
      await addTodo(this.username, todoText)
      this.setState(this.username)
    }
  })

  this.setState = async (username) => {
    this.username = username

    this.data = await fetchTodos(this.username)
    todoList.setState(this.data)
  }

  this.init = async () => {
    this.users = await fetchUsers()
    userList.render(this.users)
  }

  this.init()
}
