import { validateBoolean } from './validator.js'

export default function Loading({ $target, isLoading }) {
  this.isLoading = validateBoolean(isLoading)

  this.$loading = document.querySelector('#loading')

  this.setState = (nextState) => {
    validateBoolean(nextState)
    this.isLoading = nextState
    this.render()
  }

  this.render = () => {
    this.$loading.className = this.isLoading ? 'active' : ''
  }
  this.render()
}
