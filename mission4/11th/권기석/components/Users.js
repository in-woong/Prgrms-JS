export default function Users({ $app, userList }) {
  this.userList = userList

  this.$users = document.createElement('ul')
  this.$users.className = 'users'
  $app.appendChild(this.$users)

  this.render = () => {
    const htmlString = this.userList.map((name) => `<li class="user-name">${name}</li>`).join('')
    this.$users.innerHTML = htmlString
  }

  this.setState = (userList) => {
    this.userList = userList
    this.render()
  }

  this.render()
}
