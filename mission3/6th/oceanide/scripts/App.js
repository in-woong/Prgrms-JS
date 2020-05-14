import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import FetchData from './FetchData.js'

function App() {
  const onSearchKeyword = async (keyword) => {
    this.setState(await FetchData({ text: keyword }))
  }

  this.init = function () {
    this.$searchInput = document.querySelector('#search-keyword')
    this.$searchResult = document.querySelector('#search-result')

    try {
      this.searchInput = new SearchInput(this.$searchInput, onSearchKeyword)
      this.searchResult = new SearchResult(this.data, this.$searchResult)
    } catch (err) {
      console.log(err)
    }
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.searchResult.setState(nextData)
  }

  this.init()
}

export default App
