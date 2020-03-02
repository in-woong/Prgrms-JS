import { KEY_CODE } from '../utils/constants.js'

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
      alert('저장할 내용이 없어요.')
      return false
    }
    return true
  }
}

export default TodoInput
