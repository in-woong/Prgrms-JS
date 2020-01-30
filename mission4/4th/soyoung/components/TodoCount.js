export default class TodoCount {
  constructor({ $target, totalCount, completedCount }) {
    this.$target = $target
    this.totalCount = this._validateNumber(totalCount)
    this.completedCount = this._validateNumber(completedCount)

    this.render()
  }

  _validateNumber = item => {
    if (typeof item !== 'number') throw new Error('Item is not a number')
    return item
  }

  setState = ({ totalCount, completedCount }) => {
    this.totalCount = this._validateNumber(totalCount)
    this.completedCount = this._validateNumber(completedCount)
    this.render()
  }

  render = () => {
    this.$target.innerHTML = `총 ${this.totalCount}개 중 ${this.completedCount}개 완료`
  }
}
