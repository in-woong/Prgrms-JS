class UserList {
  constructor(userListId, titlePanel, api) {
    this.api = api
    this.titlePanel = titlePanel
    this.currentUser = ""

    this.$userList = document.querySelector(userListId)
    this.$userList.addEventListener('click', this.onClick.bind(this), false)
  }

  async render() {
    const buildHtml = (user) => `
        <div data-username='${user}' ${user===this.currentUser ? 'class=current' : ''}>
            ${user}
        </div>`

    const users = await this.api.loadUsers()
    this.$userList.innerHTML = users.map(buildHtml).join('')
  }

  onClick(e) {
    this.currentUser = e.target.dataset.username

    this.api.setUser(this.currentUser)
    this.titlePanel.setUser(this.currentUser)
    this.render();
  }
}

export default UserList
