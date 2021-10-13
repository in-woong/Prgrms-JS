import { $ } from './utils.js'

export default class SearchHistory {
  constructor(history, clickHistory) {
    this.history = history
    this.showHistoryDiv = $('#search-history')
    this.clickHistory = clickHistory
    this.showHistoryDiv.addEventListener('click', ({ target }) => {
      if (target.id.includes('history_')) {
        const historyId = target.id.match(/[0-9]+/)[0]
        clickHistory(historyId)
      }
    })
  }

  render(history) {
    this.showHistoryDiv.innerHTML = history
      .map((keyword, index) => {
        return `<li id="history_${index}" style="display:inline">${keyword}</li>`
      })
      .join(' ')
  }

  setState(newHistory) {
    this.history = newHistory
    this.render(this.history)
  }
}
