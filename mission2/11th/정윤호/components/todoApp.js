import TodoList from './todoList.js'
import TodoInput from './todoInput.js'
import checkTodoListState from '../validators/checkTodoListState.js'
import todoAppTemplate from '../layouts/todoAppTemplate.js'

export default class TodoApp {
  constructor($app, initialState) {
    this.state = initialState
    checkTodoListState(this.state)
    this.$app = $app
    this.$app.innerHTML = todoAppTemplate()
    this.todoInput = new TodoInput()
    this.todoList = new TodoList(this.state)
  }

  setState(nextState) {
    this.state = nextState
    checkTodoListState(this.state)
    this.render()
  }

  render() {
    this.todoInput.render()
    this.todoList.render()
  }
}
