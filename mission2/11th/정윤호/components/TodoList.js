import { $ } from '../utils/dom.js'
import todoItemTemplate from '../layouts/todoItemTemplate.js'

export default class TodoList {
  constructor($target, initialState) {
    this.$todoList = $target
    this.state = initialState
    this.$todoList.addEventListener('click', this.onClick)
  }

  render() {
    const htmlString = this.state.map((todoItem) => todoItemTemplate(todoItem)).join('')
    this.$todoList.innerHTML = `<ul>${htmlString}</ul>`
  }

  setState(nextState) {
    this.state = nextState
    this.render()
  }

  onClick = ({ target }) => {
    if (!target.matches('.delete-item-button')) return
    console.log('TodoList-onClck', target)
  }
}
