import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'
import SearchHistory from './components/SearchHistory.js'

function App() {
  this.images = []
  this.histories = []
  this.$app = document.querySelector('#app')

  this.init = () => {
    this.searchHistory = new SearchHistory({
      onClickHistory: this.onClickHistory,
    })

    this.searchInput = new SearchInput({
      onChangeData: this.setState,
    })

    this.searchResult = new SearchResult({
      data: this.images,
    })
  }

  this.onClickHistory = (keyword) => {
    this.searchInput.setState(keyword, true)
  }

  this.setState = (newDatas, keyword, isHistory) => {
    if (!isHistory) this.histories.push(keyword)
    this.images = newDatas
    this.searchResult.setState(this.images)
    this.searchHistory.render(this.histories)
  }

  this.init()
}

export default App
