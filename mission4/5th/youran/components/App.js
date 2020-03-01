import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoUser from './TodoUser.js'
import Users from './Users.js'
import { $ } from '../utils/service.js'
import { SELECTOR } from '../utils/constants.js'
import {
  fetchAllTodos,
  postTodo,
  deleteTodo,
  putTodo,
  fetchAllUsers,
} from '../utils/api.js'

function App() {
  this.todoData = []
  this.userData = []
  this.currentUser = 'youran'

  this.initComponents = () => {
    this.users = new Users(this.userData, $(SELECTOR.USERS), {
      onChangeUser: this.onChangeUser,
    })

    this.todoList = new TodoList(this.todoData, $(SELECTOR.TODO_LIST), {
      onToggleTodo: this.onToggleTodo,
      onRemoveTodo: this.onRemoveTodo,
    })

    this.todoInput = new TodoInput($(SELECTOR.TODO_INPUT), {
      onAddTodo: this.onAddTodo,
    })

    this.todoUser = new TodoUser(this.currentUser, $(SELECTOR.TODO_USER))
  }

  this.setState = () => {
    this.todoList.setState(this.todoData)
    this.users.setState(this.userData)
    this.todoUser.setState(this.currentUser)
  }

  this.getAllTodos = async () => {
    const updateData = await fetchAllTodos(this.currentUser)
    this.todoData = updateData
    this.setState()
  }

  this.getAllUsers = async () => {
    const updateData = await fetchAllUsers()
    this.userData = updateData
    this.setState()
  }

  this.onAddTodo = async newTodo => {
    await postTodo(this.currentUser, newTodo)
    await this.getAllTodos(this.currentUser)
  }

  this.onRemoveTodo = async todoId => {
    await deleteTodo(this.currentUser, todoId)
    await this.getAllTodos(this.currentUser)
  }

  this.onToggleTodo = async todoId => {
    await putTodo(this.currentUser, todoId)
    await this.getAllTodos(this.currentUser)
  }

  this.onChangeUser = async username => {
    this.currentUser = username
    await this.getAllTodos()
  }

  this.initComponents()
  this.getAllUsers()
}

export default App
