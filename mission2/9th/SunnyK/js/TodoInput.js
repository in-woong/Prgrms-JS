import { useNewKeyword } from './validation.js'

const TODO_INPUT_CLASS_NAMES = {
  textInput: 'todo-text-input',
  inputBtn: 'todo-input-btn',
  deleteAllTodoBtn: 'todo-delete-all-btn',
}

export default function TodoInput({ $app, onAddTodo }) {
  useNewKeyword(new.target)

  const $target = document.createElement('div')
  $target.className = 'TodoInput'
  this.$target = $target
  $app.appendChild($target)

  this.onAddTodo = ($todoTextInput) => {
    if ($todoTextInput.value === '') alert('할 일을 입력하세요!')
    else {
      onAddTodo($todoTextInput.value)
      $todoTextInput.value = ''
    }
    $todoTextInput.focus()
  }

  this.bindAddTodoEvent = () => {
    const $todoTextInput = document.querySelector(
      `.${TODO_INPUT_CLASS_NAMES.textInput}`
    )

    $todoTextInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.onAddTodo(e.target)
    })

    document
      .querySelector(`.${TODO_INPUT_CLASS_NAMES.inputBtn}`)
      .addEventListener('click', (e) => this.onAddTodo($todoTextInput))
  }

  this.bindDeleteAllEvent = () => {
    document
      .querySelector(`.${TODO_INPUT_CLASS_NAMES.deleteAllTodoBtn}`)
      .addEventListener('click', () => {
        window.dispatchEvent(new Event('removeAll'))
      })
  }

  this.render = () => {
    $target.innerHTML = `
      <input class="${TODO_INPUT_CLASS_NAMES.textInput}" type="text" />
      <input class="${TODO_INPUT_CLASS_NAMES.inputBtn}" type="button" value="+"/>
      <input class="${TODO_INPUT_CLASS_NAMES.deleteAllTodoBtn}" type="button" value="전체삭제"/>
    `
  }

  this.render()
  this.bindAddTodoEvent()
  this.bindDeleteAllEvent()
}
