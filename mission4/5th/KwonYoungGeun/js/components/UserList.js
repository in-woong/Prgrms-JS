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
    this.$element.addEventListener('click', e => this.onClick(e))
  }

  this.onClick = e => {
    if (e.target.className === 'list-item user-list-item') {
      onChangeUser(e.target.innerText)
    }
  }

  this.setState = data => {
    this.userListData = data
    this.render()
  }

  this.render = () => {
    this.$element.innerHTML = `<ul class="user-list">${this.userListData
      .map(user => `<li class="list-item user-list-item">${user}</li>`)
      .join('')}</ul>`
  }

  this.init()
}

export default UserList
