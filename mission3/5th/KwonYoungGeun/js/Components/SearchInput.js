import { $, debounce } from '../utils/index.js'
import { validateElement } from '../validation/index.js'
import { TIME_OUT_DURATION } from '../constants/index.js'

function SearchInput({ target, onSearch }) {
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
    this.$element.addEventListener(
      'keyup',
      debounce(e => onSearch({ text: e.target.value }), TIME_OUT_DURATION)
    )
  }

  this.setState = value => {
    this.inputValue = value
    this.$element.value = value
  }

  this.init()
}

export default SearchInput
