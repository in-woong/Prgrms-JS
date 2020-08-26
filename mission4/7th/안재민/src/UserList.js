import { isNotEmpty, isArray, isString } from './validator.js'

class UserList {
  constructor(userListId, usernameId, onClickUser) {
    this.$userList = this.getUserList(userListId)
    this.$username = this.getUsernameTag(usernameId)
    this.onClickUser = onClickUser
    this.users = []
    this.username = 'Undefined user'
    this.registerEventHandler()
  }

  getUserList = (userListId) => {
    const $userList = document.getElementById(userListId)
    isNotEmpty($userList)
    return $userList
  }

  getUsernameTag = (usernameId) => {
    const $username = document.getElementById(usernameId)
    isNotEmpty($username)
    return $username
  }

  registerEventHandler = () => {
    this.$userList.addEventListener('click', (e) => {
      const user = e.target.closest('li').innerText
      this.onClickUser(user)
    })
  }

  render = () => {
    if (this.users.length === 0) {
      this.$userList.innerHTML = `<p class="empty-notice">등록된 사용자가 없습니다.</p>`
    } else {
      const userListHTML = this.users
        .sort()
        .map((user) => {
          return `<li>${user}</li>`
        })
        .join(' ')

      this.$userList.innerHTML = `
        <ul>
          <li class="list-title"><p>유저 리스트</p></li>
          ${userListHTML}
        </ul>
      `
    }
    this.$username.innerHTML = this.username
  }

  validateUsers = (users) => {
    users.every((user) => this.validateUsername(user))
  }

  validateUsername = (user) => {
    isString(user)
    return true
  }

  setState = (users, username) => {
    this.validateUsers(users)
    this.validateUsername(username)
    this.username = username
    this.users = users
    this.render()
  }
}

export default UserList
