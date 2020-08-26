function TodoCount({ elementId, todos }) {
  validateConstructor(this, TodoCount)

  this.todos = todos
  this.$target = document.querySelector(`#${elementId}`)

  this.render = () => {
    this.$target.innerHTML = `Total count: ${this.todos.length}`
  }

  this.setState = (todos) => {
    this.todos = todos
    this.render()
  }

  this.render()
}
