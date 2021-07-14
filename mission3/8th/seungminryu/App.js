import SearchResult from './SearchResult.js'
import SearchInput from './SearchInput.js'
import api from './api.js'

function App({ $searchInput, $searchResult }) {
  let state = {}

  this.onSearchStart = (term) => {
    this.searchResult()
  }

  this.onSearchComplete = (data, term) => {
    this.searchResult.setState({ term, data })
  }

  this.onSearchByTerm = async (term) => {
    this.onSearchStart(term)
    this.searchInput.setState({ term })
    this.onSearchComplete(api.search(term), term)
  }

  this.setState = (state) => {
    this.state = state
    this.render()
  }

  this.render = () => {
    searchInput.render()
    searchResult.render()
  }

  this.searchResult = new SearchResult({ term: '', data: [] }, $searchResult)

  this.searchInput = new SearchInput(
    { term: '', data: [] },
    $searchInput,
    this.onSearchStart
  )
}

export default App
