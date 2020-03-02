import { API_URL, ENTER_KEY } from './Constants.js'
import { SearchResult } from './SearchResult.js'

export default function App() {
  document.getElementById('search-keyword').addEventListener('keydown', e => {
    if (e.key === ENTER_KEY) {
      this.onSearch(e.target.value)
      e.target.value = ''
    }
  })

  this.init = function() {
    this.searchResult = new SearchResult([], document.getElementById('search-result'))
  }

  this.onSearch = function(keyword) {
    const data = fetch(`${API_URL}${keyword}`)
      .then(response => response.json())
      .then(
        data => this.setState(data)
      )}

  this.setState = function(nextData) {
    this.searchResult.setState(nextData)
  }
  this.init()
}
