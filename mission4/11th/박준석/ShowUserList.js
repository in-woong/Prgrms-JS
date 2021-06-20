import { TodoAPI } from './TodoAPI.js'

export default class ShowUserList {
  constructor(params) {
    this.targetUserList = params.targetUserList
    this.targetTodoList = params.targetTodoList
    this.userList = []
    this.showUserTodoList = params.showUserTodoList

    this.targetUserList.addEventListener('click', ({ target }) => this.userClickEventHandler(target))
    this.setState()
  }

  userClickEventHandler(target) {
    const userID = target.closest('li').dataset.username
    if (target.tagName === 'SPAN') {
      this.targetTodoList.style.display = 'block'
      this.showUserTodoList(userID)
      this.targetUserList.style.display = 'none'
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
    this.targetUserList.innerHTML = `사용자를 선택하세요 <ul>${userListHtmlString.join('')}</ul>`
  }
}
