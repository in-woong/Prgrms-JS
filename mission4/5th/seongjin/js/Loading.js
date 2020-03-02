import { $ } from './util.js'

export default function Loading(isLoading) {
  this.$target = $('#loading')
  this.isLoading = isLoading

  this.setState = nextData => {
    this.isLoading = nextData
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = this.isLoading
      ? `<div class="loading">isLoading...</div>`
      : ''
  }

  this.render()
}
