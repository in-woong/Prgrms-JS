function TodoCount({ $app, initialState }) {
  this.state = initialState
  this.$target = document.createElement('div')

  $app.appendChild(this.$target)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = `
      Total Count: ${this.state.length} / Completed Count: ${this.state.filter(todo => todo.isCompleted).length}
    `
  }

  this.render()
}