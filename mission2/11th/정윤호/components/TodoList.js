import { $ } from '../utils/dom.js'
import todoItemTemplate from '../layouts/todoItemTemplate.js'

export default class TodoList {
  constructor($target, initialState) {
    this.$todoList = $target
    this.state = initialState
    this.$todoList.addEventListener('click', this.onClick)
  }

  setDeleteTodoItem(deleteTdoItem) {
    this.deleteTdoItem = deleteTdoItem
  }

  setToggleTodoItem(toggleTodoItem) {
    this.toggleTodoItem = toggleTodoItem
  }

  onClick = ({ target }) => {
    if (!target.matches('.delete-item-button') && !target.matches('.todo-item')) return
    if (target.matches('.delete-item-button')) {
      const targetId = Number(target.closest('li').dataset.id)
      this.deleteTdoItem && this.deleteTdoItem(targetId)
      return
    }
    if (target.matches('.todo-item')) {
      this.toggleTodoItem && this.toggleTodoItem(target)
    }
  }

  render() {
    const htmlString = this.state.map((todoItem) => todoItemTemplate(todoItem)).join('')
    this.$todoList.innerHTML = `<ul>${htmlString}</ul>`
  }

  setState(nextState) {
    this.state = nextState
    this.render()
  }
}
