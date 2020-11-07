import { useNewKeyword } from './Validation.js'

const TODO_INPUT_CLASS_NAMES = {
  textInput: 'todo-text-input',
  inputBtn: 'todo-input-btn',
}

export default function TodoInput({ $target }) {
  useNewKeyword()

  this.$target = $target

  this.setAddTodoEvent = () => {
    const $todoTextInput = document.querySelector(
      `.${TODO_INPUT_CLASS_NAMES.textInput}`
    )

    $todoTextInput.addEventListener('keypress', (e) => {
      const ENTER_KEY_CODE = 13
      if (e.keyCode === ENTER_KEY_CODE) this.addTodo(e.target)
    })

    document
      .querySelector(`.${TODO_INPUT_CLASS_NAMES.inputBtn}`)
      .addEventListener('click', (e) => this.addTodo($todoTextInput))
  }

  this.addTodo = ($todoTextInput) => {
    if ($todoTextInput.value === '') alert('할 일을 입력하세요!')
    else {
      this.insertTodo($todoTextInput.value)
      $todoTextInput.value = ''
    }
    $todoTextInput.focus()
  }

  this.render = () => {
    $target.innerHTML = `
      <input class="${TODO_INPUT_CLASS_NAMES.textInput}" type="text" />
      <input class="${TODO_INPUT_CLASS_NAMES.inputBtn}" type="button" value="+"/>
    `
  }

  this.render()
  this.setAddTodoEvent()
}