function TodoCount({ $app, initialState }) {
  this.state = initialState // data - totalCount, completedCount
  this.$todoCount = document.createElement('div')

  $app.appendChild(this.$todoCount)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const counts = {
      totalCount: this.state.length,
      completedCount: this.state.filter((todo) => todo.isCompleted).length,
    }

    this.$todoCount.innerHTML = `
      <span> 전체 개수: ${counts.totalCount}</span>
      <span> 완료 개수:${counts.completedCount}</span>
    `
  }
}

export default TodoCount
