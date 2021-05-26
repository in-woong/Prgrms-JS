export default function Users({ $target, initialState, onCheckout }) {
  const $userList = document.createElement('ul')

  $target.append($userList)
  $userList.className = 'user-list'

  this.state = initialState
  this.$userList = $userList

  $userList.addEventListener('click', (e) => {
    if (e.target.className === 'user') {
      onCheckout(e.target.innerHTML)
    }
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { users } = this.state
    const htmlUser = users.map((userName) => `<li class="user">${userName}</li>`).join('')
    this.$userList.innerHTML = htmlUser
  }
}
