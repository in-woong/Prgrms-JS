import TodoList from './todoList.js'
import checkTodoListState from '../validators/checkTodoListState.js'

export default class TodoApp {
  constructor($app, initialState) {
    this.state = initialState
    checkTodoListState(this.state)
    this.$app = $app // this.$app 으로 사용할지 $app으로 사용할지
    this.todoList = new TodoList(this.$app, this.state)
  }

  setState(nextState) {
    this.state = nextState
    checkTodoListState(this.state)
    this.render()
  }

  render() {
    this.todoList.render()
  }
}
