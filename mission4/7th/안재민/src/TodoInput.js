import { isNotEmpty, isString } from './validator.js '

class TodoInput {
  constructor(todoInputId, addButtonId, onAddTodo) {
    this.$todoInput = this.getTodoInput(todoInputId)
    this.$addButton = this.getAddButton(addButtonId)
    this.onAddTodo = onAddTodo
    this.registerEventHandler()
  }

  getTodoInput = (todoInputId) => {
    const $todoInput = document.getElementById(todoInputId)
    isNotEmpty($todoInput)
    return $todoInput
  }

  getAddButton = (addButtonId) => {
    const $addButton = document.getElementById(addButtonId)
    isNotEmpty($addButton)
    return $addButton
  }

  registerEventHandler = () => {
    this.$addButton.addEventListener('click', () => {
      const todoText = this.$todoInput.value
      isString(todoText)
      if (todoText.length === 0) return
      this.onAddTodo(todoText)
      this.$todoInput.value = ''
    })
  }
}

export default TodoInput
