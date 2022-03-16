export default function SearchHistory(elementId, historyData, getSearchData) {
  this.$history = document.querySelector(elementId)
  this.historyData = historyData

  this.setState = (nextState) => {
    this.historyData = nextState
    this.render()
  }

  this.addHistory = (keyword) => {
    const update = this.historyData.filter((data) => data !== keyword)

    if (update.length >= 5) {
      update.shift()
      this.setState([...update, keyword])
      return
    }
    this.setState([...update, keyword])
  }

  const clickHistory = (event) => {
    if (event.target.className === 'history-item') {
      getSearchData(event.target.innerText, true)
    }
  }
  this.render = () => {
    this.$history.innerHTML = `
    ${this.historyData
      .map((history) => `<li class="history-item"> ${history} </li>`)
      .join('')}
    `

    this.$history.addEventListener('click', clickHistory)
  }
  this.render()
}
