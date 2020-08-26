import SearchResult from './SearchResult.js'
import SearchInput from './SearchInput.js'
import SearchHistory from './SearchHistory.js'
import api from './api.js'

const DEFAULT_DEBOUNCE_THRESHOLD = 500

function App(
  { $searchResultEl, $searchInputEl, $searchHistoryEl },
  debounceThreshold = DEFAULT_DEBOUNCE_THRESHOLD
) {
  let state = {} // 중앙관리로 바꿔봅시다아

  this.onSearchStart = (term) => {
    this.searchHistory.setState([
      term,
      ...this.searchHistory.state.filter((t) => t !== term).slice(0, 5),
    ])
    this.searchResult.setState({ term, data: [], loading: true, error: null })
  }
  this.onSearchComplete = (data, term) => {
    this.searchResult.setState({ term, data, loading: false, error: null })
  }
  this.onSearchError = (error, term) => {
    console.log(this.searchResult)
    this.searchResult.setState({ term, data: [], loading: false, error })
  }
  this.searchByTerm = async (term) => {
    try {
      this.onSearchStart(term)
      this.searchInput.setState({ term })
      this.onSearchComplete(await api.search(term), term)
    } catch (error) {
      this.onSearchError(error, term)
    }
  }

  this.setState = (state) => {
    this.state = state
    this.render()
  }

  this.render = () => {
    searchResult.render()
    searchInput.render()
  }

  this.searchResult = new SearchResult(
    { term: '', data: [], loading: false, error: null },
    $searchResultEl
  )

  this.searchInput = new SearchInput(
    { term: '' },
    $searchInputEl,
    {
      onSearchStart: this.onSearchStart,
      onSearchComplete: this.onSearchComplete,
      onSearchError: this.onSearchError,
    },
    debounceThreshold
  )

  this.searchHistory = new SearchHistory([], $searchHistoryEl, {
    searchByTerm: this.searchByTerm,
  })
}

export default App
