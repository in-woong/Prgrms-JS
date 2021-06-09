import { $ } from './utils.js'
import { todoAppTemplate } from './DOM.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import TodoRemoveAll from './TodoRemoveAll.js'
import TodoLocalStorage from './TodoLocalStorage.js'

export default class TodoApp {
  constructor($target) {
    this.todoLocalStorage = new TodoLocalStorage()
    this.state = this.todoLocalStorage.loadState()
    this.target = $($target)
    this.target.innerHTML = todoAppTemplate()

    this.todoList = new TodoList(this.target, this.state, $('#todo-list'), this.renewList.bind(this))
    this.todoInput = new TodoInput(this.addNewNode.bind(this))
    this.todoCount = new TodoCount(this.todoList.state)
    this.removeAll = new TodoRemoveAll(this.target, this.removeAllList.bind(this))
  }

  addNewNode(nextNode) {
    this.setState([...this.todoList.state, nextNode])
  }

  renewList(nextState) {
    this.setState(nextState)
  }

  removeAllList() {
    this.setState([])
  }

  setState(nextState) {
    this.todoList.setState(nextState)
    this.todoCount.setState(nextState)
    this.todoLocalStorage.setState(nextState)
  }
}
