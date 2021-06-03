import { $ } from '../utils/dom.js'
import TodoInput from './todoInput.js'
import TodoList from './todoList.js'
import { todoStore } from '../store/todoStroe.js'
import checkTodoListState from '../validators/checkTodoListState.js'
import todoAppTemplate from '../layouts/todoAppTemplate.js'

export default class TodoApp {
  constructor($app) {
    this.state = todoStore.loadState() || todoStore.getState()
    checkTodoListState(this.state)

    $app.innerHTML = todoAppTemplate()

    this.todoInput = new TodoInput($('.todo-input'))
    this.todoInput.setAddTodoItem((target) => {
      const text = target.value
      this.setState([
        ...this.state,
        {
          text: text,
          isCompleted: false,
        },
      ])
    })
    this.todoInput.setClearTodoList(() => {
      this.setState([])
    })

    this.todoList = new TodoList($('.todo-list'), this.state)
  }

  setState(nextState) {
    this.state = nextState
    checkTodoListState(this.state)
    this.todoList.setState(this.state)
    todoStore.setState(this.state)
    todoStore.saveState()
  }

  render() {
    this.todoInput.render()
    this.todoList.render()
  }
}
