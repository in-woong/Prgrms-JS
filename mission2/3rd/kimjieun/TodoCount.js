export default class TodoCount {
  constructor({ $selector }) {
    this.$selector = $selector
  }

  createAllCountHTMLString(allCount) {
    return `<span>할 일 총 갯수: ${allCount}</span>`
  }

  createCompletedCountHTMLString(compeletedCount) {
    return `<span>완료된 할 일 총 갯수: ${compeletedCount}</span>`
  }

  createCountHTMLString(data) {
    const allCount = data.length
    const compeletedCount = data.filter(d => d.isCompleted).length

    this.$selector.innerHTML =
      `${this.createAllCountHTMLString(allCount)}<br>${this.createCompletedCountHTMLString(compeletedCount)}`
  }
}