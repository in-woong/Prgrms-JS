import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoListDone from './TodoListDone.js'
import Users from './Users.js'
import LoadingView from './LoadingView.js'
import { fetchTodos, fetchUsers, addTodo, removeTodo, toggleTodo } from './api.js'

export default function App () {
  const userList = new Users({
    $target: document.querySelector('#user-list'),
    users: this.users,
    onClickUser: (username) => {
      this.setState(username)
    },
    $username: document.querySelector('#user-name')
  })

  const todoList = new TodoList({
    $target: document.querySelector('#todo-list'),
    data: this.data,
    // onClick: async (id, index) => {
    //   await toggleTodo(this.username, id)
    //   this.setState(this.username)
    // },
    onRemove: async (id) => {
      await removeTodo(this.username, id)
      this.setState(this.username)
    },
  })

  const completedList = new TodoListDone({
    $target: document.querySelector('#completed-list'),
    data: this.data,
    // onClick: async (id, index) => {
    //   await toggleTodo(this.username, id)
    //   this.setState(this.username)
    // },
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

  const loadingView = new LoadingView({
    $target: document.querySelector('#loading-text'),
    isLoading: this.isLoading
  })

  this.setState = async (username) => {
    loadingView.setState(true)
    this.username = username

    this.data = await fetchTodos(this.username)
    todoList.setState(this.data.filter(todo => !todo.isCompleted))
    completedList.setState(this.data.filter(todo => todo.isCompleted))

    loadingView.setState(false)
  }

  this.init = async () => {
    this.users = await fetchUsers()
    this.isLoading = false

    userList.render(this.users)
  }

  this.init()
}
