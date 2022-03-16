import { validateInstance } from '../utils/validation.js'

function Users({ $target, state, changeUser }) {
  if (validateInstance(this, Users)) return
  this.state = state

  this.$userLists = document.createElement('div')
  $target.appendChild(this.$userLists)

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    this.$userLists.innerHTML = `<ul>${this.state.users
      .map((user) => `<li>${user}</li>`)
      .join('')}</ul>
      <p>Current User: ${this.state.currentUser}</p>`
  }

  this.setEvent = () => {
    this.$userLists.addEventListener('click', (e) => {
      console.log(e.target.closest('li').innerText)
      changeUser(e.target.closest('li').innerText)
    })
  }

  this.render()
  this.setEvent()
}

export default Users
