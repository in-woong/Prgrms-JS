import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import { searchData, debounce } from './utils.js'
import { jjalbotApiUrl } from './constansts.js'

export default class App {
  constructor() {
    this.$resultElement = document.querySelector('#search-result')

    this.searchInput = new SearchInput({ 
      inputSearch: this.inputSearch.bind(this)
    })
    this.searchResult = new SearchResult(this.$resultElement, '')
    this.searchHistory = new SearchHistory({
      sendHistoryKeyword: this.sendHistoryKeyword.bind(this)
    })

    this.history = []
  }

  inputSearch(e) {
    debounce(() => {
      searchData(jjalbotApiUrl, e.target.value).then(data => { 
        if(e.target.value) {
          this.searchResult.setState(data)
          this.getUniqueKeyword(e.target.value)
          this.searchHistory.setState(this.history)
        }
      })}, 200)
  }

  getUniqueKeyword(keyword) {
    this.history.push(keyword)
    this.history = [... Array.from(new Set(this.history))]
  }

  sendHistoryKeyword(keyword) {
    this.$resultElement.innerHTML = ''

    searchData(jjalbotApiUrl, keyword).then(data => { 
      this.searchResult.setState(data)
    })
  }
}
