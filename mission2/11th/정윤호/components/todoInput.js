import { $ } from '../utils/dom.js'
import todoInputTemplate from '../layouts/todoInputTemplate.js'

export default class TodoInput {
  constructor($target) {
    this.$todoInput = $target
    this.$todoInput.addEventListener('keyup', this.onKeyUp)
    this.$todoInput.addEventListener('click', this.onClick)
  }

  setAddTodoItem(addTodoItem) {
    this.addTodoItem = addTodoItem
  }

  setClearTodoList(clearTodoList) {
    this.clearTodoList = clearTodoList
  }

  onKeyUp = ({ target, key }) => {
    if (key !== 'Enter' || this.$todoInputText.value.trim() === '') return
    this.addTodoItem && this.addTodoItem(target)
    this.clearText()
  }

  onClick = ({ target }) => {
    if (!target.matches('.todo-input_submit') && !target.matches('.todo-input_list-clear')) return
    if (target.matches('.todo-input_submit')) {
      this.addTodoItem && this.addTodoItem(this.$todoInputText)
      this.clearText()
      return
    }
    if (target.matches('.todo-input_list-clear')) {
      this.clearTodoList && this.clearTodoList()
      return
    }
  }

  render() {
    this.$todoInput.innerHTML = todoInputTemplate()
    this.$todoInputText = $('.todo-input_text')
  }

  clearText() {
    this.$todoInputText.value = ''
  }
}
