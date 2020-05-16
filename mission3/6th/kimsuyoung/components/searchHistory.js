function searchHistory({ $historySelector, searchHistory }) {
  this.render = () => {
    $historySelector.innerHTML = `${[...searchHistory]
      .map((value) => `<div>${value}</div>`)
      .join('')}`
  }

  // 5th 동현님 소스 참조
  this.setState = (keyword) => {
    searchHistory.add(keyword)
    console.log('history', searchHistory)
    this.render()
  }
}

export default searchHistory
