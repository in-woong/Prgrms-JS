import todoItemTemplate from '../layouts/todoItemTemplate.js'
import checkTodoItemData from '../validators/checkTodoItemData.js'

export default class TodoList {
  constructor($target, initialState) {
    this.state = initialState
    this.$target = $target
    checkTodoItemData(this.state)
  }

  render() {
    this.$target.innerHTML = this.state.map((todoItem) => todoItemTemplate(todoItem)).join('')
  }

  setState(nextState) {
    this.state = nextState
    checkTodoItemData(this.state)
    this.render()
  }
}
