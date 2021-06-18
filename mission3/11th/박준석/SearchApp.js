import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import { communicateWithAPI } from './utils.js'

const API_URL = 'https://jjalbot.com'
const URL_TAIL = (inputValue) => {
  return `/api/jjals?text=${inputValue}`
}

export default class SearchApp {
  constructor() {
    this.state = []
    this.history = []
    this.searchInput = new SearchInput(async (inputValue) => {
      const receivedData = await communicateWithAPI(API_URL, URL_TAIL(inputValue))
      this.setState(receivedData, inputValue)
    })
    this.searchResult = new SearchResult(this.state, '#search-result')
    this.searchHistory = new SearchHistory([], async (historyId) => {
      const receivedData = await communicateWithAPI(API_URL, URL_TAIL(this.history[historyId]))
      this.setState(receivedData)
    })
  }

  setState(receivedData, inputValue) {
    this.state = receivedData
    this.history = [...this.history, inputValue]
    this.searchResult.setState(this.state)
    if (inputValue !== undefined) this.searchHistory.setState(this.history)
  }
}
