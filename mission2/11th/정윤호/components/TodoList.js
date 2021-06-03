import { $ } from '../utils/dom.js'
import todoItemTemplate from '../layouts/todoItemTemplate.js'

export default class TodoList {
  constructor(initialState) {
    this.state = initialState
    this.$todoList = $('.todo-list')
  }

  render() {
    const htmlString = this.state.map((todoItem) => todoItemTemplate(todoItem)).join('')
    this.$todoList.innerHTML += `<ul>${htmlString}</ul>`
  }

  setState(nextState) {
    this.state = nextState
    this.render()
  }
}
