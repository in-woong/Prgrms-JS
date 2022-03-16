class TodoCount {
  constructor($target, initialState) {
    this.$target = document.createElement('div')
    $target.appendChild(this.$target)
    this.state = initialState
    this.render()
  }
  setState(nextState) {
    this.state = nextState
    this.render()
  }
  render() {
    const { totalTodosNum, completedTodosNum } = this.state
    const template = `
      총 todo의 개수: <b style="color:red;">${totalTodosNum}</b> /
      완료처리된 Todo의 개수: <b style="color:blue;">${completedTodosNum}</b>
    `
    this.$target.innerHTML = template
  }
}
