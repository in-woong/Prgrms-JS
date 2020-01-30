import { throwError, hasValidProperty } from './utils.js'

export default class TodoList {
  constructor({ toggleTodo, removeTodo, removeAllTodo }) {
    this.$ul = document.querySelector('#list')
    this.listItems = []

    this.toggleTodo = toggleTodo
    this.removeTodo = removeTodo
    this.removeAllTodo = removeAllTodo

    this.$ul.addEventListener('click', e => this.handleClick(e))
    this.$ul.addEventListener('removeAll', e => this.removeAllTodo(e))
  }

  _validateTodoList(listItems) {
    if (!Array.isArray(listItems)) throwError('List is not a Array')
    listItems.every(item => this._validateTodoItem(item))
    return listItems
  }
  _validateTodoItem(item) {
    if (
      !hasValidProperty(item, {
        text: 'string',
        isCompleted: 'boolean',
      })
    )
      throwError('Invalid item property')

    return item
  }

  render() {
    this.$ul.innerHTML = this.listItems
      .map((item, idx) =>
        item.isCompleted
          ? `<li data-order="${idx}"><del>${item.text}</del><button>제거</button></li>`
          : `<li data-order="${idx}"><span>${item.text}</span><button>제거</button></li>`
      )
      .join('')
  }

  handleClick(event) {
    if (event.target.nodeName === 'SPAN' || event.target.nodeName === 'DEL') {
      const index = event.target.parentNode.dataset.order
      this.toggleTodo(index)
    } else if (event.target.nodeName === 'BUTTON') {
      const index = event.target.parentNode.dataset.order
      this.removeTodo(index)
    }
  }

  setState(nextData) {
    this.listItems = this._validateTodoList(nextData)
  }
}
