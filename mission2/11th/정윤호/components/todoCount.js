import todoCountTemplate from '../layouts/todoCountTemplate.js'

export default class TodoCount {
  constructor($target, state) {
    this.$todoCount = $target
    this.state = state
  }

  render() {
    const countState = {
      totalCount: this.state.length,
      completedCount: this.state.filter((todoItem) => todoItem.completed).length,
    }
    console.log(countState.completedCount)

    this.$todoCount.innerHTML = todoCountTemplate(countState)
  }

  setState(nextState) {
    this.state = nextState
    this.render()
  }
}
