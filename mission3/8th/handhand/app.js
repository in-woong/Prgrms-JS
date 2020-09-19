import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'
import SearchHistory from './components/SearchHistory.js'

function App() {
  this.datas = []
  this.$app = document.querySelector('#app')
  this.$searchResult = document.querySelector('#search-result')

  this.init = () => {
    this.searchHistory = new SearchHistory({ $parent: this.$app })

    this.searchInput = new SearchInput({
      $parent: this.$app,
      onChangeData: this.setState,
    })

    this.searchResult = new SearchResult({
      data: this.datas,
      $target: this.$searchResult,
    })

    this.$app.addEventListener('new-keyword', (event) => {
      const keyword = event.detail.keyword
      this.searchHistory.pushHistory(keyword)
    })

    this.$app.addEventListener('search-history', (event) => {
      const keyword = event.detail.keyword
      this.searchInput.getImagesWithoutHistory(keyword)
    })
  }

  this.setState = (newDatas) => {
    this.datas = newDatas
    this.searchResult.setState(this.datas)
  }

  this.init()
}

export default App
