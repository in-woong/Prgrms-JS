import SearchHistory from './components/SearchHistory.js'
import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'
import api from './api.js'
import { MAX_HISTORY_SIZE } from './constants.js'

function Main() {
  this.data = null
  this.history = []

  this.init = () => {
    try {
      this.searchHistory = new SearchHistory({
        data: this.history,
        $target: document.querySelector('#search-history'),
        onClickHistory: this.handleSearch,
      })

      this.searchInput = new SearchInput({
        $target: document.querySelector('#search-keyword'),
        onKeyUp: this.handleSearch,
      })

      this.searchResult = new SearchResult(
        this.data,
        document.querySelector('#search-result')
      )
    } catch (e) {
      console.log(e)
    }
  }

  this.setState = newData => {
    this.searchResult.setState(newData)
    this.data = newData
  }

  this.handleSearch = async (value, fromInput) => {
    if (!value) {
      return
    }

    if (fromInput) {
      if (!this.history.includes(value)) {
        if (this.history.length >= MAX_HISTORY_SIZE) {
          this.history = this.history.slice(1)
        }
        this.history = [...this.history, value]
        this.searchHistory.setState([...this.history])
      }
    } else {
      this.searchInput.setState(value)
    }

    try {
      const res = await api.getJjalAPI({ text: value })
      if (res.status !== 200) {
        throw new Error('[Main] API를 확인해주세요.')
      }

      this.setState(await res.json())
    } catch (e) {
      console.log(e)
    }
  }

  this.init()
}

export default Main
