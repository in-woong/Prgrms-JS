export default function SearchHistory({ $target, initialState, onClick, removeHistoryItem }) {
  const $historyList = document.createElement('ul')

  $target.appendChild($historyList)

  this.state = initialState
  this.$historyList = $historyList
  this.removeHistoryItem = removeHistoryItem

  this.$historyList.addEventListener('click', (e) => {
    const targetID = e.target.id
    if (e.target.className === 'remove-btn') {
      this.removeHistoryItem(targetID)
    } else if (e.target.className === 'history-item-text') {
      onClick(e.target.innerHTML)
    }
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  // review6 개행처리
  this.render = () => {
    const historyList = this.state
      .map(
        (item, index) => `
          <li class="history-item">
            <span class="history-item-text">${item}</span>
            <button id="${index}" class="remove-btn">x</button>
          </li>
          `
      )
      .join('')
    this.$historyList.innerHTML = historyList
  }
}
