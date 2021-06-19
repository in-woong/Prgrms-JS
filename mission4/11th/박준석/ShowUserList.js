import { TodoAPI } from './TodoAPI.js'
import { $ } from './util.js'

export default class ShowUserList {
  constructor(showUserTodoList) {
    this.target = $('#user-list')
    this.userList = []
    this.showUserTodoList = showUserTodoList

    this.target.addEventListener('click', ({ target }) => this.userClickEventHandler(target))
    this.setState()
  }

  userClickEventHandler(target) {
    const userID = target.closest('li').dataset.username
    if (target.tagName === 'SPAN') {
      $('#users-todo-list').style.display = 'block'
      this.showUserTodoList(userID)
      this.target.style.display = 'none'
    }
  }

  async setState() {
    this.userList = await TodoAPI.getUserList()
    this.render()
  }

  render() {
    const userListHtmlString = this.userList.map((username) => {
      return `<li data-username="${username}"><span class="user-name">${username}</span></li>`
    })
    this.target.innerHTML = `사용자를 선택하세요 <ul>${userListHtmlString.join('')}</ul>`
  }
}
