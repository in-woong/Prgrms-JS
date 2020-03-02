import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import Loading from './Loading.js'
import { $, errorCheck } from './util.js'
import {
  getUsersTodoApi,
  getTodoApi,
  addTodoApi,
  removeTodoApi,
  toggleTodoApi,
} from './api.js'
import TodoUsers from './TodoUsers.js'

export default function App() {
  this.$removeallBtn = $('#removeall-btn')
  this.$todoList = $('#todo-list')
  this.$inputWrapper = $('#input-wrapper')
  this.$usersWrapper = $('#users-wrapper')
  this.todos = []
  this.users = []
  this.username = 'seongjin'
  this.isLoading = false

  this.init = () => {
    this.todoList = new TodoList(
      this.todos,
      this.onDeleteClick,
      this.onToggleClick
    )
    this.loading = new Loading(this.isLoading)
    this.todoInput = new TodoInput(this.onAddClick)
    this.todoCount = new TodoCount(this.getTotalCount, this.getCompletedCount)
    this.todoUsers = new TodoUsers(this.users, this.getfetchData)

    this.getfetchData()
    this.getfetchUsersData()
  }

  this.onAddClick = async newTodo => {
    errorCheck.isMe(this.username)
    await addTodoApi(this.username, newTodo)
    await this.getfetchData()
  }

  this.onToggleClick = async _id => {
    errorCheck.isMe(this.username)
    await toggleTodoApi(this.username, _id)
    await this.getfetchData()
  }

  this.onDeleteClick = async _id => {
    errorCheck.isMe(this.username)
    await removeTodoApi(this.username, _id)
    await this.getfetchData()
  }

  this.getTotalCount = () => {
    return this.todos.length
  }

  this.getCompletedCount = () => {
    return this.todos.filter(todo => todo.isCompleted).length
  }

  this.removeAllTodo = () => {
    this.todos = []
    this.render()
  }

  this.$todoList.addEventListener('removeAll', this.removeAllTodo)

  this.$removeallBtn.addEventListener('click', () => {
    const removeAllevent = new CustomEvent('removeAll')
    this.todoList.$target.dispatchEvent(removeAllevent)
  })

  this.getfetchData = async nextUsername => {
    this.username = nextUsername
    if (this.username === undefined) {
      this.username = 'seongjin'
    }

    this.$inputWrapper.style.display = 'none'
    this.$usersWrapper.style.display = 'none'
    this.loading.setState(true)
    this.todos = await getTodoApi(this.username)
    this.$inputWrapper.style.display = 'block'
    this.$usersWrapper.style.display = 'block'
    this.loading.setState(false)
    this.render()
  }

  this.getfetchUsersData = async () => {
    this.users = await getUsersTodoApi()
    this.userRender()
  }

  this.render = async () => {
    this.todoList.setState(this.todos)
    this.todoCount.setState(this.todos)
  }

  this.userRender = async () => {
    this.todoUsers.setState(this.users)
  }

  this.init()
}
