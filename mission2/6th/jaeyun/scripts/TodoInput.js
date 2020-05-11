import { createDom } from '../utils/utilFunctions.js'

class TodoInput {
  constructor(inputHandler) {
    this.render()

    this.$addButton.addEventListener('click', () => {
      const $input = this.$todoInput

      if ($input.value) {
        inputHandler($input.value)
        $input.focus()
        $input.value = ''
      }
    })
  }

  render() {
    this.$inputContainer = createDom('div', { id: 'todo-input-container' })

    this.$todoInput = createDom('input', { id: 'todo-input' })

    this.$addButton = createDom('button', { id: 'add-todo' })
    this.$addButton.append('추가')

    this.$inputContainer.append(this.$todoInput, this.$addButton)
  }
}

export default TodoInput
