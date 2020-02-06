class TodoCount {
  constructor($target, data) {
    this.$target = $target
    this.data = data
    this.render()
  }

  setState(nextData) {
    this.data = nextData
    this.render()
  }

  render() {
    const { totalCount, completedCount } = this.data 
    this.$target.innerHTML = `Total Count: ${totalCount} / Completed Count: ${completedCount}`
  }
}
