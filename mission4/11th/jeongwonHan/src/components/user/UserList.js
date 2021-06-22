function UserList({ $target, state, onSelectUser }) {
  this.$target = $target
  this.state = state

  this.$userList = document.createElement('ul')
  this.$userList.classList.add('userList')
  this.$target.appendChild(this.$userList)

  this.onSelectUser = onSelectUser

  this.onClickHandler = (e) => {
    const selectedList = e.target.closest('li').innerText
    console.log(selectedList)
    this.onSelectUser(selectedList)
  }

  this.setState = function (nextState) {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const htmlSting = this.state.userList.map((userName) => `<li>${userName}</li>`).join('')
    this.$userList.innerHTML = htmlSting
    this.$userList.addEventListener('click', this.onClickHandler)
  }

  this.render()
}
export default UserList
