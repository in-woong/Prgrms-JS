function TodoCount({ $target, initialState }) {
  this.state = initialState

  const $todoCount = document.createElement('div')
  $target.appendChild($todoCount)

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }
  this.render = () => {
    const { totalNum, completedNum } = this.state
    $todoCount.innerHTML = `Completed: ${completedNum}개 / Total: ${totalNum}개`
  }

  this.render()
}
