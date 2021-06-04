import todoCountTemplate from '../layouts/todoCountTemplate.js'

export default class TodoCount {
  constructor($target, initialState) {
    this.state = initialState
    this.$todoCount = $target
  }

  render() {
    const countState = {
      totalCount: this.state.length,
      completedCount: this.state.filter((todoItem) => todoItem.isCompleted).length,
    }

    this.$todoCount.innerHTML = todoCountTemplate(countState)
  }

  setState(nextState) {
    this.state = nextState
    this.render()
  }
}
