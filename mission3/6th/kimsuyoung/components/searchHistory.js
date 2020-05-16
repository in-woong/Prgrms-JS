function searchHistory({ $historySelector, searchHistory, onSearch }) {
  this.render = () => {
    $historySelector.innerHTML = `${[...searchHistory]
      .map((value) => `<div class="history-keyword">${value}</div>`)
      .join('')}`
  }

  $historySelector.addEventListener('click', (event) => {
    onSearch(event.target.innerText)
  })

  // 5th 동현님 소스 참조
  this.setState = (keyword) => {
    searchHistory.add(keyword)
    //console.log('history', searchHistory)
    this.render()
  }
}

export default searchHistory
