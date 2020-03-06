import { $ } from '../utils/index.js'
import { validateElement } from '../validation/index.js'

function User({ target, username }) {
  this.init = () => {
    this.$element = $(target)
    this.username = username

    this.validate(this.$element)
    this.render()
  }

  this.validate = $element => {
    validateElement($element)
  }

  this.setState = data => {
    this.username = data
    this.render()
  }

  this.render = () => {
    this.$element.innerHTML = `<h2 class="username">${this.username} 님의 투두 리스트</h2>`
  }

  this.init()
}

export default User
