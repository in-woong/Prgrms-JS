import { $, debounced } from '../utils/index.js'
import { validateElement } from '../validation/index.js'

function SearchInput({ target, onChange }) {
  this.init = () => {
    this.$element = $(target)
    this.inputValue = null
    this.validate(this.$element)
    this.bindEvents()
  }

  this.validate = $element => {
    validateElement($element)
  }

  this.bindEvents = () => {
    this.$element.addEventListener('keyup', debounced(1000, this.onKeyup))
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
