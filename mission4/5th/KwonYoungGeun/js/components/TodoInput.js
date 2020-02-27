import { $ } from '../utils/index.js'
import { ENTER_KEY } from '../constants/index.js'
import { validateElement } from '../validation/index.js'

function TodoInput({ target, onSubmit }) {
  this.init = () => {
    this.$element = $(target)
    this.$input = $(`${target}>#todo-input`)
    this.$submitButton = $(`${target}>#add-todo-button`)
    this.inputValue = ''

    this.validate([this.$element, this.$input, this.$submitButton])
    this.bindEvents()
  }

  this.validate = $elements => {
    $elements.forEach($element => validateElement($element))
  }

  this.bindEvents = () => {
    this.$input.addEventListener('keyup', e => this.onKeyup(e))
    this.$submitButton.addEventListener('click', e =>
      onSubmit(this.$input.value)
    )
  }

  /**
   * TODO: 한글 입력 후 EnterKey 로 제출 시 이벤트가 2번 발생함
   */
  this.onKeyup = e => {
    if (!e.target.value.length) {
      return
    }

    if (e.keyCode !== ENTER_KEY) {
      return
    }
    onSubmit(e.target.value)
  }

  this.setState = value => {
    this.$input.value = value
    this.inputValue = value
  }

  this.init()
}

export default TodoInput
