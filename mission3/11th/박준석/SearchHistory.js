import { $ } from './utils.js'

export default class SearchHistory {
  constructor(history, clickHistory) {
    this.history = history
    this.showHistoryDiv = $('#search-history')
    this.clickHistory = clickHistory
    this.showHistoryDiv.addEventListener('click', ({ target }) => {
      if (target.id.includes('history_')) {
        clickHistory(target.innerHTML)
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

  setState(newKeyword) {
    this.history = [...this.history, newKeyword]
    this.render(this.history)
  }
}
