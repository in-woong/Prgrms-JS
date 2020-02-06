import api from '../api/api.js'
import { userTabTemplate, userTitleTemplate } from '../utils/templates.js'
import { DEFAULT_USER } from '../utils/utils.js'

export default function UserList(todoList) {
  const $userList = document.querySelector('#user-list')
  this._users = []

  this._initUsers = async () => {
    try {
      const fetchedUsers = await api.user.get()
      this._users = fetchedUsers.map((name) => ({ name }))
      this._render(this._users, DEFAULT_USER)
    } catch (e) {
      throw new Error(e)
    }
  }

  this._filterTargetUser = (user, target) => user.name === target

  this._render = (userList, target) => {
    $userList.innerHTML = userList.map((user) => userTabTemplate(user, this._filterTargetUser(user, target))).join('')
  }

  this._activeTargetUser = (e) => {
    const targetUsername = e.target.dataset.username
    if (targetUsername) {
      this._initUserTitle(targetUsername)
      this._render(this._users, targetUsername)
      this._updateTodoList(targetUsername)
    }
  }

  this._updateTodoList = async (targetUsername) => {
    todoList.renderSkeleton()
    try {
      const targetTodoList = await api.todoItem.get(targetUsername)
      todoList.render(targetTodoList)
      todoList.renderTodoCount(targetTodoList)
    } catch (e) {
      throw new Error(e)
    }
  }

  this._initUserTitle = (targetUsername) => {
    const $userTitle = document.querySelector('#user-title')
    $userTitle.dataset.username = targetUsername
    $userTitle.innerHTML = userTitleTemplate(targetUsername)
  }

  this._initEventListener = () => {
    document.querySelector('#user-list').addEventListener('click', this._activeTargetUser)
  }

  this.init = () => {
    this._initUsers()
    this._initUserTitle(DEFAULT_USER)
    this._initEventListener()
  }
}
