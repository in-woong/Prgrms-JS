import SearchInput from './SearchInput.js'
import SearchHistory from './SearchHistory.js'
import SearchResult from './SearchResult.js'
import fetchData from './fetchData.js'

function App() {
  this.data = null
  this.keyword = null

  const onSearchKeyword = async (keyword) => {
    this.keyword = keyword
    try {
      const images = await fetchData({ text: keyword })
      this.setState(images)
    } catch (err) {
      console.log(err)
    }
  }

  this.init = function () {
    this.$searchInput = document.querySelector('#search-keyword')
    this.$searchHistory = document.querySelector('#search-history')
    this.$searchResult = document.querySelector('#search-result')

    try {
      this.searchInput = new SearchInput(this.$searchInput, onSearchKeyword)
      this.searchHistory = new SearchHistory(
        this.keyword,
        this.$searchHistory,
        onSearchKeyword
      )
      this.searchResult = new SearchResult(this.data, this.$searchResult)
    } catch (err) {
      console.log(err)
    }
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.searchInput.setState(this.keyword)
    this.searchResult.setState(nextData)
    this.searchHistory.setState(this.keyword)
  }

  this.init()
}

export default App
