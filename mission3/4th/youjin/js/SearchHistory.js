export default class SearchHistory {
  constructor({ sendHistoryKeyword }) {
    const $searchArea = document.querySelector('#search-history')
    this.$searchList = document.createElement('ul')
    $searchArea.appendChild(this.$searchList)

    this.history = []
    this.sendHistoryKeyword = sendHistoryKeyword
    this.$searchList.addEventListener('click', e => this.handleClick(e))
  }

  handleClick(event) {
    this.sendHistoryKeyword(event.target.textContent)
  }

  setState(history) {
    this.history = history
    this.render()
  }
  
  render() {
    this.$searchList.innerHTML = this.history
      .map(item => `<li><button type="button">${item}</button></li>` )
      .join('')
  }
}
