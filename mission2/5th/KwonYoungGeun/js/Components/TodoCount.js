import Component from './Component.js'
import { validateElement } from '../Utils/index.js'
export default class TodoCount extends Component {
  constructor($element) {
    super($element)
    this.validate($element)
    this.totalCount = 0
    this.completedCount = 0
    this.init()
  }

  init() {
    this.render(this.getMarkupString())
  }

  validate($element) {
    validateElement($element)
  }

  setState({ totalCount, completedCount }) {
    this.totalCount = totalCount
    this.completedCount = completedCount
    this.render(this.getMarkupString())
  }

  getMarkupString() {
    return `<div>전체 TODO 수: ${this.totalCount}</div><div>완료 TODO 수: ${this.completedCount}</div>`
  }
}
