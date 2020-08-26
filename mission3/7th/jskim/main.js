import SearchHistory from './search-history.js'
import SearchResult from './search-result.js'
import { getImages } from './api.js'

class Main {
  constructor() {
    try {
      this.data = []
      const histories = localStorage.getItem('histories')
      this.histories = histories ? JSON.parse(histories) : []
      this.searchKeywordEl = document.querySelector('#search-keyword')
      this.searchHistoryEl = document.querySelector('#search-history')

      this.searchHistory = new SearchHistory(this.histories, '#search-history')
      this.searchResult = new SearchResult(this.data, '#search-result')
      this.apiObj = null

      this.searchEvent()
      this.clickSearchHistory()
    } catch (err) {
      alert(err.message)
    }
  }

  addHistory(text) {
    if (!this.histories.includes(text)) {
      this.histories = [...this.histories, text]
      localStorage.setItem('histories', JSON.stringify(this.histories))
    }
  }

  clickSearchHistory() {
    this.searchHistoryEl.addEventListener('click', (e) => {
      this.searchKeywordEl.value = e.target.textContent

      this.search(e.target.textContent)
    })
  }

  searchEvent() {
    this.searchKeywordEl.addEventListener('keyup', (e) => {
      this.search(e.target.value)
    })
  }

  search(text) {
    if (this.apiObj) {
      clearTimeout(this.apiObj)
    }
    this.apiObj = setTimeout(async () => {
      this.setState(await getImages(text))
      this.addHistory(text)
      this.searchHistory.setState(this.histories)
    }, 300)
  }

  setState(nextData) {
    this.data = nextData

    this.searchResult.setState(this.data)
  }
}

new Main()
