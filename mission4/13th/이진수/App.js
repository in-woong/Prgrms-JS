import { getTodoList, getUserList, addTodoList } from './apis.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import Users from './Users.js'
import UserName from './UserName.js'

import {
  checkDataValidation,
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from './utils.js'
import { deleteAllTodoList, deleteTodoList, toggleTodoList } from './apis.js'

const MY_ID = 'dgujs'

function App($element) {
  this.state = getDataFromLocalStorage()
  this.users = []
  this.selectedUser = MY_ID

  this.setUsers = (nextData = []) => {
    this.users = nextData
    users.setState(nextData)
  }

  this.setSelectedUser = async (nextUser = '') => {
    this.selectedUser = nextUser
    userName.setState(nextUser)
    this.loadingRender()
    const _todoList = await getTodoList(this.selectedUser)
    this.setState(_todoList)
  }

  this.setState = (nextData = []) => {
    if (!checkDataValidation(nextData)) throw new Error('Data Invalid!')
    this.state = nextData
    setDataToLocalStorage(nextData)
    todoList.setState(nextData)
    todoCount.setState(nextData)
  }

  this.addTodo = (newTodo) => {
    ;(async () => {
      this.loadingRender()
      const _todoList = await addTodoList(this.selectedUser, newTodo)
      this.setState(_todoList)
    })()
  }

  this.modifyTodo = (newTodoList) => {
    this.setState([...newTodoList])
  }

  this.loadingRender = () => {
    $todoList.innerHTML = `Loading...`
  }

  this.render = () => {
    $element.innerHTML = `
    <div id="todo-users" style="margin-bottom: 1rem"></div>
    <div id="selected-user" style="margin-bottom: 1rem"></div>
    <div id="todo-input"></div>
    <div id="todo-list"></div>
    <div id="todo-count"></div>
    `
    ;(async () => {
      const _userList = await getUserList()
      this.setUsers(_userList)
      this.loadingRender()
      const _todoList = await getTodoList(this.selectedUser)
      this.setState(_todoList)
    })()
  }
  this.render()

  new TodoInput(document.getElementById('todo-input'), this.addTodo)

  const $todoList = document.getElementById('todo-list')
  const todoList = new TodoList($todoList, this.state)

  const $todoCount = document.getElementById('todo-count')
  const todoCount = new TodoCount($todoCount, this.state)

  const $users = document.getElementById('todo-users')
  const users = new Users($users, this.users)

  const $userName = document.getElementById('selected-user')
  const userName = new UserName($userName, this.selectedUser)

  $todoList.addEventListener('click', async (event) => {
    if (!event?.target?.id) return
    const [type, id] = event.target.id.split('_')
    switch (type) {
      case 'text': {
        this.loadingRender()
        const _todoList = await toggleTodoList(this.selectedUser, id)
        this.modifyTodo(_todoList)
        return
      }
      case 'delete': {
        this.loadingRender()
        const _todoList = await deleteTodoList(this.selectedUser, id)
        this.modifyTodo(_todoList)
        return
      }
      default:
        return
    }
  })

  $users.addEventListener('click', async (event) => {
    if (event.target.id) {
      this.setSelectedUser(event.target.id)
    }
  })
  $element.addEventListener('removeAll', async () => {
    this.loadingRender()
    const _todoList = await deleteAllTodoList(this.selectedUser)
    this.setState(_todoList)
  })
}

new App(document.getElementById('root'))
