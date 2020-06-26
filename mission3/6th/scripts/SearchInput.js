import SearchHistroy from './SearchHistroy.js'

class SearchInput {
  constructor(searchHandler) {
    this.timer = null
    this.searchHistoryData = []
    this.$searchInput = document.querySelector('#search-keyword')
    this.$historyContainer = document.createElement('div')
    this.searchHandler = searchHandler
    this.searchHistory = new SearchHistroy(
      this.searchHistoryData,
      this.$historyContainer
    )
    this.$searchInput.addEventListener('keyup', (e) => {
      this.searchKeywordHandler(e.target.value)
    })
    this.$historyContainer.addEventListener('click', (e) => {
      const { index } = e.target.dataset
      this.searchKeywordHandler(this.searchHistoryData[index])
    })
  }

  setSearchHistory = (keyword) => {
    if (!this.searchHistoryData.includes(keyword) && keyword) {
      this.searchHistoryData = [...this.searchHistoryData, keyword]
    }
  }

  searchKeywordHandler = (value) => {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      this.searchHandler(value)
      this.setSearchHistory(value)
      this.render()
    }, 300)
  }

  render = () => {
    this.searchHistory.setState(this.searchHistoryData)
    this.$searchInput.insertAdjacentElement('afterend', this.$historyContainer)
  }
}

export default SearchInput
