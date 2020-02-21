import { $ } from '../utils/index.js'
function SearchInput({ target, onChange }) {
  this.init = () => {
    this.$element = $(target)
    this.inputValue = null
    this.bindEvents()
  }

  this.bindEvents = () => {
    this.$element.addEventListener('keyup', this.onKeyup)
  }

  this.onKeyup = e => {
    this.setState(e.target.value)
    onChange(this.inputValue)
  }

  this.setState = value => {
    this.inputValue = value
  }

  this.init()
}

export default SearchInput
