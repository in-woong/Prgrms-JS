function TodoCount({ $app, todos }) {
  this.todos = todos

  const $target = document.createElement('div')
  $target.className = 'TodoCount'
  $app.appendChild($target)

  this.$target = $target

  this.render = () => {
    const totalCount = this.todos.length
    const completedCount = this.todos.filter((todo) => todo.isCompleted).length
    this.$target.innerHTML = `해야 할 일 총 갯수: ${totalCount}  완료된 할 일 갯수: ${completedCount}`
  }

  this.setState = (nextState) => {
    this.todos = nextState
    this.render()
  }

  this.render()
}
