import { $ } from '../utils/index.js'
import { validateElement } from '../validation/index.js'
function UserList({ target, onChangeUser }) {
  this.init = () => {
    this.$element = $(target)
    this.userListData = []

    this.validate(this.$element)
    this.bindEvents()
    this.render()
  }
  this.validate = $element => {
    validateElement($element)
  }

  this.bindEvents = () => {
    this.$element.addEventListener('click', e =>
      onChangeUser(e.target.innerText)
    )
  }

  this.setState = data => {
    this.userListData = data
    this.render()
  }

  this.render = () => {
    this.$element.innerHTML = `<ul>${this.userListData
      .map(user => `<li>${user}</li>`)
      .join('')}</ul>`
  }

  this.init()
}

export default UserList
