import api from './api.js'
import SearchHistory from './SearchHistory.js'
import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'

function App() {
  this.$target = document.querySelector('#app')
  this.images = []
  this.history = []
  this.search = async (keyword) => {
    if (!keyword) {
      return
    }
    try {
      this.images = await api.getImagesFromApi(keyword)
      if (this.images.length > 0) {
        this.searchResult.setState(this.images)
      }
      if (this.history.indexOf(keyword) === -1) {
        this.history.push(keyword)
        this.searchHistory.setState(this.history)
      }
    } catch (e) {
      console.log(e)
    }
  }
  this.searchHistory = new SearchHistory(
    this.$target,
    this.search,
    this.history
  )
  this.searchKeyword = new SearchKeyword(this.$target, this.search)
  this.searchResult = new SearchResult(this.$target, this.images)
}

export default App
