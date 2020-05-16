import searchKeyword from './searchKeyword.js'
import searchResult from './searchResult.js'
import searchHistory from './searchHistory.js'
import { loadData } from '../api.js'

export default function App() {
  this.data = []
  this.searchHistory = new Set()

  this.onSearch = async (keyword) => {
    try {
      const result = await loadData(keyword)
      this.data = result
      this.setState(keyword)
    } catch (e) {
      console.error(e)
    }
  }

  this.searchKeyword = new searchKeyword({
    $inputSelector: document.querySelector('#search-keyword'),
    onSearch: this.onSearch,
  })

  this.searchResult = new searchResult({
    data: this.data,
    $resultSelector: document.querySelector('#search-result'),
  })

  this.searchHistory = new searchHistory({
    $historySelector: document.querySelector('#search-history'),
    searchHistory: this.searchHistory,
    onSearch: this.onSearch,
  })

  this.setState = (keyword) => {
    this.searchResult.setState(this.data)
    this.searchHistory.setState(keyword)
  }
}
