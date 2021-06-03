import todoItemTemplate from '../layouts/todoItemTemplate.js'

export default class TodoList {
  constructor($app, initialState) {
    this.state = initialState
    this.$app = $app
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
    this.render()
  }
}
