import { $ } from '../utils/dom.js'
import TodoList from './todoList.js'
import TodoInput from './todoInput.js'
import checkTodoListState from '../validators/checkTodoListState.js'
import todoAppTemplate from '../layouts/todoAppTemplate.js'

export default class TodoApp {
  constructor($app, initialState) {
    this.state = initialState
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
  }

  render() {
    this.todoInput.render()
    this.todoList.render()
  }
}
