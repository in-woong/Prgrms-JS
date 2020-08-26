import API, {
  GET_TODO_LIST,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
} from './api.js'
import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import UserList from './UserList.js'
import UserAPI, { GET_USER_LIST } from './UserAPI.js'

class App {
  constructor({
    username,
    userListId,
    usernameId,
    todoListId,
    todoInputId,
    addButtonId,
    loadingNoticeId,
    delay,
  }) {
    this.username = username
    this.delay = delay
    this.todoAPI = new API(this.username, loadingNoticeId, this.delay)
    this.userAPI = new UserAPI(loadingNoticeId, this.delay)
    this.todoList = new TodoList(todoListId, this.toggleTodo, this.removeTodo)
    this.todoInput = new TodoInput(todoInputId, addButtonId, this.addTodo)
    this.userList = new UserList(userListId, usernameId, this.changeUsername)
    this.todos = []
    this.init()
  }

  changeUsername = (username) => {
    this.todoAPI.setUsername(username)
    this.username = username
    this.getTodos()
  }

  getUsers = async () => {
    this.users = await this.userAPI.callAPI(GET_USER_LIST)
    this.setState()
  }

  addTodo = async (todoText) => {
    await this.todoAPI.callAPI(ADD_TODO, { todoText })
    this.getTodos()
  }

  getTodos = async () => {
    const todos = await this.todoAPI.callAPI(GET_TODO_LIST)
    this.todos = todos
    this.setState()
  }

  toggleTodo = async (todoId) => {
    await this.todoAPI.callAPI(TOGGLE_TODO, { todoId })
    this.getTodos()
  }

  removeTodo = async (todoId) => {
    await this.todoAPI.callAPI(REMOVE_TODO, { todoId })
    this.getTodos()
  }

  setState = () => {
    this.todoList.setState(this.todos)
    this.userList.setState(this.users, this.username)
  }

  init = async () => {
    this.todos = await this.todoAPI.callAPI(GET_TODO_LIST)
    this.users = await this.userAPI.callAPI(GET_USER_LIST)
    this.setState()
  }
}

export default App
