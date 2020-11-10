import { useNewKeyword } from './validation.js'

const ENTER_KEY_CODE = 13
const TODO_INPUT_CLASS_NAMES = {
  textInput: 'todo-text-input',
  inputBtn: 'todo-input-btn',
  deleteAllTodoBtn: 'todo-delete-all-btn',
}

export default function TodoInput({ $target, insertTodo, deleteAllTodo }) {
  useNewKeyword(new.target)

  this.$target = $target
  this.insertTodo = insertTodo
  this.deleteAllTodo = deleteAllTodo
  this.removeAllEvent = new Event('removeAll')

  this.setAddTodoEvent = () => {
    const $todoTextInput = document.querySelector(
      `.${TODO_INPUT_CLASS_NAMES.textInput}`
    )

    $todoTextInput.addEventListener('keypress', (e) => {
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

  this.setDeleteAllEvent = () => {
    const $deleteAllBtn = document.querySelector(
      `.${TODO_INPUT_CLASS_NAMES.deleteAllTodoBtn}`
    )

    $deleteAllBtn.addEventListener('removeAll', this.deleteAllTodo)

    $deleteAllBtn.addEventListener('click', (e) => {
      e.target.dispatchEvent(this.removeAllEvent)
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
  this.setAddTodoEvent()
  this.setDeleteAllEvent()
}
