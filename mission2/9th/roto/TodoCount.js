export default function TodoCount({ $app, initialState }) {
  const $target = document.createElement('div')
  $target.className = 'TodoCount'
  $app.appendChild($target)
  this.$target = $target

  this.state = initialState

  this.getCounts = () => ({
    totalCount: this.state.length,
    completedCount: this.state.filter((todo) => todo.isCompleted).length,
  })

  this.render = () => {
    const { totalCount, completedCount } = this.getCounts()
    this.$target.innerHTML = `Total Count: ${totalCount} / Completed Count: ${completedCount}`
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render()
}
