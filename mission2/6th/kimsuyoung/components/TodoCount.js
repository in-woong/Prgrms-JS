class TodoCount {
  constructor(props) {
    this.$todoCount = document.querySelector(props.selector)
    this.data = props.data
  }

  setState(nextDate) {
    this.data = nextDate
    this.render()
  }

  render() {
    this.$todoCount.innerHTML = `<span>완료: ${this.data.completedCount} </span>/ 총 갯수: ${this.data.totalCount}`
  }
}

export default TodoCount
