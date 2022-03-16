import { isValidConstructor, isValidTarget } from './utils.js'

function TodoInput({ $target, onAddTodo }) {
  isValidTarget($target)
  isValidConstructor.call(this, TodoInput)

  this.$target = $target
  this.$input = document.createElement('input')
  this.$submitBtn = document.createElement('button')
  this.$deleteAllBtn = document.createElement('button')

  this.onSubmit = function (e) {
    e.preventDefault()

    if (!this.$input.value.trim()) {
      return
    }

    onAddTodo(this.$input.value)

    this.$input.value = ''
    this.$input.focus()
  }

  this.$target.addEventListener('submit', this.onSubmit.bind(this))

  this.onTriggerEvent = function (e) {
    const event = new CustomEvent('removeAll', {
      bubbles: true,
    })

    e.target.dispatchEvent(event)
  }

  this.$deleteAllBtn.addEventListener('click', this.onTriggerEvent)

  this.render = function () {
    this.$submitBtn.textContent = '추가'
    this.$submitBtn.type = 'submit'

    this.$deleteAllBtn.textContent = '목록 초기화'
    this.$deleteAllBtn.type = 'button'

    this.$target.appendChild(this.$input)
    this.$target.appendChild(this.$submitBtn)
    this.$target.appendChild(this.$deleteAllBtn)
  }

  this.render()
}

export default TodoInput
