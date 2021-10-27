function TodoCount({ $target, initialState }) {
  this.state = initialState
  const $todoCount = document.createElement('div')

  $target.appendChild($todoCount)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { totalCount, completedCount } = this.state

    $todoCount.innerHTML = `
      Total ${totalCount} / Completed ${completedCount}
    `
  }

  this.render()
}