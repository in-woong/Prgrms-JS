function UserList({ $target, state }) {
  this.$target = $target
  this.$userList = document.createElement('ul')
  this.$userList.setAttribute('data-component-type', 'UserList')
  this.$userList.classList.add('userList')
  this.$target.appendChild(this.$userList)
  this.state = state

  this.setState = function (nextState) {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const htmlSting = this.state.userList.map((user) => `<li>${user}</li>`).join('')
    this.$userList.innerHTML = htmlSting
  }

  this.render()
}
export default UserList
