import todoItemTemplate from '../layouts/todoItemTemplate.js'
import checkTodoListState from '../validators/checkTodoListState.js'

export default class TodoList {
  constructor($app, initialState) {
    this.state = initialState
    checkTodoListState(this.state)
    this.$app = $app // this.$app 으로 사용할지 $app으로 사용할지
    this.$target = document.createElement('div')
    this.$target.setAttribute('class', 'todo-list')
    this.$app.append(this.$target)
  }

  render() {
    const htmlString = this.state.map((todoItem) => todoItemTemplate(todoItem)).join('')
    this.$target.innerHTML = `<ul>${htmlString}</ul>`
  }

  setState(nextState) {
    this.state = nextState
    checkTodoListState(this.state)
    this.render()
  }
}
