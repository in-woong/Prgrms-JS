function SearchHistory({ targetDOM, initData, onHistory }) {
  this.$targetDOM = targetDOM
  this.searchHistory = initData

  this.$serchHistorytDOM = document.createElement('ul')
  this.$serchHistorytDOM.id = 'search-history'

  this.$targetDOM.appendChild(this.$serchHistorytDOM)

  this.$serchHistorytDOM.addEventListener('mousedown', onHistory)

  this.setState = (newState) => {
    // 5개까지만 가장 이전의 것 삭제
    const keys = Object.keys(this.searchHistory)

    if (this.searchHistory[newState] !== undefined) {
      delete this.searchHistory[newState]
    } else if (keys.length >= 5) {
      delete this.searchHistory[keys[0]]
    }

    this.searchHistory[newState] = newState

    this.render()
  }

  this.render = () => {
    this.$serchHistorytDOM.innerHTML = Object.keys(this.searchHistory)
      .reverse()
      .map((historyData) => `<li>${historyData}</li>`)
      .join('')
  }

  this.render()
}

export default SearchHistory
