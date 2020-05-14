function TodoCount ($target, data) {
  this.$target = $target
  this.data = data

  let completedCnt = 0
  this.data.map(todo => {
    if (todo.isCompleted === true) {
      completedCnt++
    }
  })

  this.render = () => {
    this.$target.innerHTML =
      `<div>전체: ${this.data.length} 완료: ${completedCnt}</div>`
  }

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.render()
}
