function TodoCount ($target, data) {
  this.data = data

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.render = () => {
    $target.innerHTML =
      `Total: ${this.data.length} / Completed: ${this.data.filter(todo => todo.isCompleted).length}`
  }

  this.render()
}
