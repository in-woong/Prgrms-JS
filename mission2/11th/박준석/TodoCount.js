import { $ } from './utils.js'
import { todoCountTemplate } from './DOM.js'

export default class TodoCount {
  constructor($todoListState) {
    this.target = $('#todo-count')
    this.todoListState = $todoListState
    this.render()
  }

  render() {
    this.target.innerHTML = todoCountTemplate(this.todoListState.length, this.todoListState.filter((data) => data.isCompleted).length)
  }

  setState(nextState) {
    this.todoListState = nextState
    this.render()
  }
}
