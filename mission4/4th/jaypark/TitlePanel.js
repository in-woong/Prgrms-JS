class TitlePanel {
  constructor(userNameId, username  ) {
    this.username = username
    this.$userName = document.querySelector(userNameId)
  }

  setUser(username) {
    this.username = username
    this.render();
  }

  render() {
    this.$userName.innerHTML = `<b>${this.username}'s todo list</b>`
  }
}

export default TitlePanel
