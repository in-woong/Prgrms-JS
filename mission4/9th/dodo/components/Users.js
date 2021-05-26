import { checkCalledByNewKeyword, validateHTMLDOMElement } from '../validate.js'

export default function Users({ $target, users, selectedUser, changeUser }) {
  checkCalledByNewKeyword(new.target)
  validateHTMLDOMElement($target)
  this.$target = $target

  this.state = {
    selectedUser,
    users,
  }
  this.changeUser = changeUser

  this.$target.addEventListener('click', (e) => {
    const { action, username } = e.target.dataset
    if (!action) return
    this[action](username)
  })

  this.setState = ({ users, selectedUser }) => {
    this.state = { users, selectedUser }
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = this.state.users.map((user) => `<li data-action='changeUser' data-username=${user} class=${this.state.selectedUser === user ? 'selected' : 'unselected'}>${user}</li>`).join('')
  }

  this.render()
}
