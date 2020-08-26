import SearchKeyword from './SerachKeyword.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'

function App() {
  this.$target = document.querySelector('#app')
  this.data = []
  this.searchedKeywords = []

  const searchKeywordElement = this.$target.querySelector('#search-keyword')
  const searchResultElement = this.$target.querySelector('#search-result')
  const searchHistoryElement = this.$target.querySelector('#search-history')

  this.onSearch = async (keyword) => {
    try {
      const response = await fetch(
        `https://jjalbot.com/api/jjals?text=${keyword}`
      )
      const data = await response.json()
      this.setState(data)
    } catch (e) {
      const $errorElement = document.createElement('div')
      $errorElement.innerHTML = e
    }
  }

  this.setState = (newData) => {
    this.data = newData
    this.searchResult.setState(this.data)
  }

  this.updateSearchedKeywords = (searchedKeyword) => {
    if (this.searchedKeywords.indexOf(searchedKeyword) === -1) {
      this.searchedKeywords.push(searchedKeyword)
      this.searchHistory.render()
    }
  }

  try {
    this.searchKeyword = new SearchKeyword(
      searchKeywordElement,
      this.onSearch,
      this.updateSearchedKeywords
    )
    this.searchResult = new SearchResult(searchResultElement, this.data)

    this.searchHistory = new SearchHistory(
      searchHistoryElement,
      this.searchedKeywords
    )
  } catch (e) {
    const $errorElement = document.createElement('div')
    $errorElement.innerHTML = e
  }
}

export default App
