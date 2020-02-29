import { KEY_CODE } from '../utils/constants.js'
import { generateHTMLInputString } from '../utils/service.js'

function TodoInput($target, { onAddTodo }) {
  this.$target = $target
  this.onAddTodo = onAddTodo

  this.$target.addEventListener('keyup', event => {
    if (!this.validate(event)) return
    this.onAddTodo(event.target.value)
    this.$target.value = null
  })

  this.render = () => {
    this.$target.innerHTML = generateHTMLInputString({
      type: 'text',
      className: 'todo-text',
      placeholder: '할 일을 입력하세요!',
    })
  }

  this.validate = event => {
    if (
      event.target.className !== 'todo-text' ||
      event.keyCode !== KEY_CODE.ENTER
    )
      return false

    if (!event.target.value) {
      alert('뭐라도 해야죠!')
      return false
    }
    return true
  }
  this.render()
}

export default TodoInput
