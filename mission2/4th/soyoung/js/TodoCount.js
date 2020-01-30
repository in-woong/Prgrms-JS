import { setAttr } from './utils.js'

export default class TodoCount {
  constructor({ totalCount, completedCount }) {
    this.totalCount = this._validateNumber(totalCount)
    this.completedCount = this._validateNumber(completedCount)

    this.$p = document.querySelector('#count')
    setAttr(this.$p, 'class', 'count')

    this.render()
  }

  _validateNumber(item) {
    if (typeof item !== 'number') throw new Error('Item is not a number')
    return item
  }

  setState({ totalCount, completedCount }) {
    this.totalCount = this._validateNumber(totalCount)
    this.completedCount = this._validateNumber(completedCount)
  }

  render() {
    this.$p.innerHTML = `총 ${this.totalCount}개 중 ${this.completedCount}개 완료`
  }
}
