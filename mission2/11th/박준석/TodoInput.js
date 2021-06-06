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
    this.app.addEventListener('click', (e) => this.writeTodo(e, this))
  }

  writeTodo(e, that) {
    // console.log(e);
    // console.log(that);
    if (e.target.classList.contains('input_btn')) {
      const inputText = that.todoInput.value
      if (isValueAvailable(inputText)) throw new Error(ERROR_MSSAGE.INPUT_TEXT_ERROR)
      const data = {
        text: inputText,
        isCompleted: false,
      }
      //currentState = currentState != null ? [...currentState, data] : [data];
      //that.todoList.setState(currentState);
      that.todoInput.value = ''
      that.renewList(data)
    }
  }
}
