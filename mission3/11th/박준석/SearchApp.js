import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'

export default class SearchApp {
  constructor() {
    this.searchInput = new SearchInput((receivedData) => {
      this.setState(receivedData)
    })
    this.searchResult = new SearchResult([], '#search-result')
  }

  setState(receivedData) {
    this.searchResult.setState(receivedData)
  }
}
