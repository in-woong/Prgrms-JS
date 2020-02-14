class TodoCount extends Component {
  constructor($element) {
    super($element)
    this.validate($element)
    this.totalCount = 0
    this.completedCount = 0
    this.init()
  }

  init() {
    this.render(this.markup())
  }

  validate($element) {
    validateElement($element)
  }

  increaseTotalCount() {
    this.setState(this.totalCount + 1, this.completedCount)
  }

  decreaseTotalCount() {
    if (this.totalCount <= 0) {
      return
    }
    this.setState(this.totalCount - 1, this.completedCount)
  }

  increaseCompletedCount() {
    this.setState(this.totalCount, this.completedCount + 1)
  }

  decreaseCompletedCount() {
    if (this.completedCount <= 0) {
      return
    }
    this.setState(this.totalCount, this.completedCount - 1)
  }

  setState(totalCount, completedCount) {
    this.totalCount = totalCount
    this.completedCount = completedCount
    this.render(this.markup())
  }

  markup() {
    return `<div>전체 TODO 수: ${this.totalCount} 완료 TODO 수:${this.completedCount}</div>`
  }
}
