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

  setState({ totalCount, completedCount }) {
    console.log('카웉느!')
    this.totalCount = totalCount
    this.completedCount = completedCount
    this.render(this.markup())
  }

  markup() {
    return `<div>전체 TODO 수: ${this.totalCount}</div><div>완료 TODO 수: ${this.completedCount}</div>`
  }
}
