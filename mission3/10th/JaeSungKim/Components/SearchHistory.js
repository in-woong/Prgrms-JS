function SearchHistory({ targetId, initialState, onHistoryClick, onHistoryClear }) {
  if (!(this instanceof SearchHistory)) {
    return new SearchHistory({ targetId, initialState, onHistoryClick, onHistoryClear })
  }

  const $target = document.querySelector(targetId)
  const $historyTab = document.createElement('div')
  $historyTab.setAttribute('id', 'history-tab')
  $target.appendChild($historyTab)

  const $clearHistory = document.createElement('button')
  $clearHistory.setAttribute('id', 'history-clear-btn')
  $clearHistory.innerHTML = '히스토리 삭제'
  $historyTab.appendChild($clearHistory)

  const $searchHistory = document.createElement('ul')
  $searchHistory.setAttribute('id', 'history-list')
  $historyTab.appendChild($searchHistory)

  this.histories = initialState

  this.render = () => {
    // prettier-ignore
    $searchHistory.innerHTML = this.histories.map((item) => `
      <li>${item}<li/>
    `).join('')
  }

  this.setHistories = (newHistories) => {
    this.histories = newHistories
    this.render()
  }

  this.render()

  $searchHistory.addEventListener('click', (e) => {
    const clickedPrevInput = e.target.innerHTML
    onHistoryClick(clickedPrevInput)
  })

  $clearHistory.addEventListener('click', (e) => {
    if (confirm('히스토리를 삭제 하시겠습니까?')) {
      onHistoryClear()
    }
  })
}

export default SearchHistory
