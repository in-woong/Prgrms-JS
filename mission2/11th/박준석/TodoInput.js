import { $, isValueAvailable, ERROR_MSSAGE } from './utils.js'

export default class TodoInput {
  constructor(renewList) {
    this.form = $('.todo-list');
    this.todoInput = $('.input_text')
    this.inputBtn = $('.input_btn')
    this.renewList = renewList
    this.addInputEvent()
  }

  addInputEvent() {
    this.form.addEventListener('submit', this.writeTodo.bind(this))
  }

  writeTodo(e) {
    e.preventDefault()
    if (e.target.classList.contains('todo-list')) {
      const inputText = this.todoInput.value
      if (isValueAvailable(inputText)) {
        alert(ERROR_MSSAGE.INPUT_TEXT_ERROR)
        this.todoInput.value = ''
        throw new Error(ERROR_MSSAGE.INPUT_TEXT_ERROR)
      }
      const data = {
        text: inputText,
        isCompleted: false,
      }
      this.todoInput.value = ''
      this.renewList(data)
    }
  }
}
