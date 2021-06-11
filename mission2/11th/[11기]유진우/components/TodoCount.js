function TodoCount($target, initialState) {
  this.state = initialState // data - totalCount, completedCount
  this.$target = $target
  this.$todoCount = document.createElement('div')

  this.$target.appendChild(this.$todoCount)

  this.totalCount = (todos) => todos.length

  this.totalCompletedCount = (todos) => todos.filter((todo) => todo.isComplated).length

  this.setState = (nextState) => {
    this.state = nextState
  }

  this.render = () => {
    this.$todoCount.innerHTML = `
    <span>Total Count: ${this.totalCount(this.state)}</span>
    <span> Total Completed Count:${this.totalCompletedCount(this.state)}</span>
    `
  }
}

export default TodoCount
