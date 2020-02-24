import { $, debounce } from '../utils/index.js'
import { validateElement } from '../validation/index.js'
const constants = {
  ENTER_KEY: 13,
  TIME_OUT_DURATION: 500,
}

function SearchInput({ target, requestData }) {
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
      debounce(e => requestData(e.target.value), constants.TIME_OUT_DURATION)
    )
  }

  this.setState = value => {
    this.inputValue = value
    this.$element.value = value
  }

  this.init()
}

export default SearchInput
