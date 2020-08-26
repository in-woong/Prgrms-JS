export default class SearchHistory {
  constructor(histories, target) {
    this.histories = histories
    this.searchHistory = document.querySelector(target)
    this.render()
  }

  setState(histories) {
    this.histories = histories
    this.render()
  }

  render() {
    this.searchHistory.innerHTML = `
      <ul>
        ${this.histories
          .map((history) => `<li class="history-item">${history}</li>`)
          .join('')}
      </ul>
    `
  }
}
