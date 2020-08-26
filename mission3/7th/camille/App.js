// eslint-disable-next-line import/extensions
import getData from './model/model.js'
import SearchResult from './components/SearchResult.js'
import SearchInput from './components/SearchInput.js'
import SearchHistory from './components/SearchHistory.js'

function App() {
  this.data = []
  this.searchResult = null
  this.searchInput = null
  this.searchHistory = null
  this.inputValue = ''
  this.$listContainerId = '#search-result'
  this.$ul = document.createElement('UL')
  document.querySelector(this.$listContainerId).appendChild(this.$ul)

  this.onSearchInput = async (value) => {
    this.inputValue = value
    this.data = await getData(value)
    this.searchResult.setState(this.data)
    this.searchHistory.setState(this.inputValue)
  }
  this.onHistorySearch = async (value) => {
    if (this.inputValue === value) {
      return
    }
    this.data = await getData(value)
    this.searchResult.setState(this.data)
    this.searchHistory.setState(value)
  }
  this.init = (() => {
    this.searchInput = new SearchInput(this.onSearchInput)
    this.searchResult = new SearchResult(this.data, this.$listContainerId)
    this.searchHistory = new SearchHistory(this.onHistorySearch)
  })()
}

export default App
