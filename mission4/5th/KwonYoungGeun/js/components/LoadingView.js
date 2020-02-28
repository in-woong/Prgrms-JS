import { $ } from '../utils/index.js'
function Loading({ target }) {
  this.init = () => {
    this.$element = $(target)
    this.isLoading = false
  }

  this.setState = isLoading => {
    this.isLoading = isLoading
    this.render()
  }

  this.render = () => {
    this.$element.innerHTML = `${this.isLoading ? 'Loading...' : ''}`
  }

  this.init()
}

export default Loading
