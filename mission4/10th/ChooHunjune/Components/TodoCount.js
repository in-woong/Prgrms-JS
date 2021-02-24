export default function TodoCount({ $todoCount, initialState }) {
  this.state = initialState

  this.$todoCount = $todoCount

  this.render = () => {
    const todoDoneCount = this.state.filter((todo) => todo.isCompleted).length
    this.$todoCount.innerHTML = `Done: ${todoDoneCount} / Total: ${this.state.length}`
  }
  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render()
}
