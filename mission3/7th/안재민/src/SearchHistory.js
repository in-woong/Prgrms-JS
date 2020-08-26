const TARGET_TAG = 'LI'

function SearchHistory(historyId, onClickHistory) {
  this.historyId = historyId
  this.onClickHistory = onClickHistory
  this.history = new Set()

  this.getHistoryElement = (historyId) => {
    const historyElement = document.getElementById(historyId)
    if (!historyElement)
      throw new Error(`Invalid history element id: ${historyId}`)
    return historyElement
  }

  this.setState = (keyword) => {
    this.validateKeyword(keyword)
    this.history.add(keyword)
    this.render()
  }

  this.render = () => {
    const historyElements = [...this.history]
      .map((keyword) => `<li>${keyword}</li>`)
      .join('')
    this.historyElement.innerHTML = historyElements
  }

  this.validateKeyword = (keyword) => {
    if (!keyword || keyword.trim().length === 0)
      throw new Error('Keyword is empty')
  }

  this.handleClickHistory = (event) => {
    const target = event.target
    if (TARGET_TAG === target.tagName) {
      const keyword = target.innerHTML
      this.onClickHistory(keyword)
    }
  }

  this.init = () => {
    this.historyElement = this.getHistoryElement(this.historyId)
    this.historyElement.addEventListener('click', this.handleClickHistory)
  }

  this.init()
}

export default SearchHistory
