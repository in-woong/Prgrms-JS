import { KEY_CODE } from '../utils/constants.js'
import { generateHTMLInputString } from '../utils/service.js'

function TodoInput($target, { onAddTodo }) {
  this.$target = $target
  this.onAddTodo = onAddTodo

  this.$target.addEventListener('keyup', event => this.handleEvent(event))

  this.handleEvent = event => {
    if (!this.validate(event)) return
    this.onAddTodo(event.target.value)
    this.$target.value = null
  }

  this.validate = event => {
    if (event.keyCode !== KEY_CODE.ENTER) {
      return false
    }
    if (!event.target.value) {
      alert('뭐라도 해야죠!')
      return false
    }
    return true
  }
}

export default TodoInput
