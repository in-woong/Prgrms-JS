import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'

export default class SearchApp {
  constructor() {
    this.state = []
    this.history = []
    this.searchInput = new SearchInput(async (inputValue) => {
      const receivedData = await this.communicateWithAPI(inputValue)
      this.setState(receivedData, inputValue)
    })
    this.searchResult = new SearchResult(this.state, '#search-result')
    this.searchHistory = new SearchHistory(this.history, async (keyword) => {
      const receivedData = await this.communicateWithAPI(keyword)
      this.setState(receivedData)
    })
  }

  async communicateWithAPI(inputValue) {
    return await fetch(`https://jjalbot.com/api/jjals?text=${inputValue}`).then((x) => {
      return x.json()
    })
  }

  setState(receivedData, inputValue) {
    this.state = receivedData
    this.searchResult.setState(this.state)
    if (inputValue !== undefined) this.searchHistory.setState(inputValue)
  }
}
