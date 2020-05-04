import { $ } from '../utils/index.js'
function ErrorView({ target, errorMessage = '' }) {
  this.init = () => {
    this.$element = $(target)
    this.errorMessage = errorMessage
    this.render()
  }

  this.setState = errorMessage => {
    this.errorMessage = errorMessage
    this.render()
  }

  this.render = () => {
    this.$element.innerHTML = this.errorMessage
  }

  this.init()
}

export default ErrorView
