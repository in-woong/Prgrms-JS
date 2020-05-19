import SearchHistroy from './SearchHistroy.js'

class SearchInput {
  constructor(searchHandler) {
    this.timer = null
    this.searchHistory = []
    this.$searchInput = document.querySelector('#search-keyword')
    this.$historyContainer = document.createElement('div')
    this.searchHandler = searchHandler
    this.$searchInput.addEventListener('keyup', (e) => {
      this.searchKeywordHandler(e.target.value)
    })
    this.$historyContainer.addEventListener('click', (e) => {
      const { index } = e.target.dataset
      this.searchKeywordHandler(this.searchHistory[index])
    })
  }

  setSearchHistory = (keyword) => {
    if (!this.searchHistory.includes(keyword) && keyword) {
      this.searchHistory = [...this.searchHistory, keyword]
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
    new SearchHistroy(this.searchHistory, this.$historyContainer)
    this.$searchInput.insertAdjacentElement('afterend', this.$historyContainer)
  }
}

export default SearchInput
