import { $, isValueAvailable, ERROR_MSSAGE } from './utils.js'

export default class TodoInput {
  constructor($app, renewList) {
    this.app = $app
    this.todoInput = $('.input_text')
    this.inputBtn = $('.input_btn')
    this.renewList = renewList
    this.addInputEvent()
  }

  addInputEvent() {
    this.app.addEventListener('submit', (e) => this.writeTodo(e, this))
  }

  writeTodo(e, that) {
    e.preventDefault()
    if (e.target.classList.contains('todo-list')) {
      const inputText = that.todoInput.value
      if (isValueAvailable(inputText)) {
        alert(ERROR_MSSAGE.INPUT_TEXT_ERROR)
        that.todoInput.value = ''
        throw new Error(ERROR_MSSAGE.INPUT_TEXT_ERROR)
      }
      const data = {
        text: inputText,
        isCompleted: false,
      }
      that.todoInput.value = ''
      that.renewList(data)
    }
  }
}
