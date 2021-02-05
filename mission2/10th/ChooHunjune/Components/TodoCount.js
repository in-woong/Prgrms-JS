export default function TodoCount({ $app, initialState }) {
  this.state = initialState

  const $todoCount = document.createElement('div')
  $todoCount.className = 'TodoCount'
  $app.appendChild($todoCount)

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