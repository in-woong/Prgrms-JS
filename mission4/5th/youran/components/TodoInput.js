import { KEY_CODE, MESSAGE } from '../utils/constants.js'

function TodoInput($target, { onAddTodo }) {
  this.$target = $target
  this.onAddTodo = onAddTodo

  this.$target.addEventListener('keyup', event => this.handleEvent(event))

  this.handleEvent = event => {
    if (!this.validate(event)) return
    this.onAddTodo(event.target.value)
    this.$target.value = ''
  }

  this.validate = event => {
    if (event.keyCode !== KEY_CODE.ENTER) {
      return false
    }
    if (!event.target.value) {
      alert(MESSAGE.TODO_INPUT_EMPTY)
      return false
    }
    return true
  }
}

export default TodoInput
