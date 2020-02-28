import UserList from './UserList.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import LoadingView from './LoadingView.js'
import { $ } from '../utils/index.js'
import { validateElement } from '../validation/index.js'
import {
  fetchTodosByUsername,
  fetchUsers,
  postTodo,
  removeTodo,
  toggleTodo,
} from '../api/index.js'

function App({ target }) {
  this.init = () => {
    this.$element = $(target)
    this.username = 'KwonYoungGeun'
    this.userListData = []
    this.todoListData = []
    this.userList = new UserList({
      target: '#user-list',
      onChangeUser: this.onChangeUser,
    })
    this.todoInput = new TodoInput({
      target: '.todo-input-container',
      onSubmit: this.onSubmit,
    })
    this.todoList = new TodoList({
      target: '#todo-list',
      onRemove: this.onRemove,
      onToggle: this.onToggle,
    })
    this.loadingView = new LoadingView({ target: '#loading-status' })

    this.validate(this.$element)
    this.setState(this.username)
  }

  this.validate = $element => {
    validateElement($element)
  }

  this.onChangeUser = username => {
    this.username = username
    this.setState(this.username)
  }

  this.onRemove = async id => {
    await removeTodo({ username: this.username, id })
    this.setState(this.username)
  }

  this.onToggle = async id => {
    await toggleTodo({ username: this.username, id })
    this.setState(this.username)
  }

  this.onSubmit = async todoText => {
    await postTodo({ username: this.username }, { todoText })
    this.setState(this.username)
  }

  this.setState = async username => {
    this.loadingView.setState(true)

    this.username = username
    this.userListData = await fetchUsers()
    this.todoListData = await fetchTodosByUsername({ username: this.username })

    this.userList.setState(this.userListData)
    this.todoInput.setState('')
    this.todoList.setState({
      username: this.username,
      todoListData: this.todoListData,
    })
    this.loadingView.setState(false)
  }

  this.init()
}

export default App
