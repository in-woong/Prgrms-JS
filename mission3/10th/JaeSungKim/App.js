import fetchImages from './api.js'
import SearchInput from './Components/SearchInput.js'
import SearchResult from './Components/SearchResult.js'
import SearchHistory from './Components/SearchHistory.js'

function App(initialState) {
  if (!(this instanceof App)) {
    return new App(initialState)
  }

  this.state = initialState
  let currentInput = ''

  this.searchInput = new SearchInput({
    targetId: '#app',
    onSearchInput: async (input) => {
      currentInput = input.trim()
      if (currentInput !== '' && !this.state.histories.includes(currentInput)) {
        const data = await fetchImages(currentInput)
        this.setState({
          results: { ...this.state.results, [input]: data },
          histories: [...this.state.histories, currentInput],
        })
      }
    },
  })

  this.searchHistory = new SearchHistory({
    targetId: '#app',
    initialState: this.state.histories,
    onHistoryClick: async (history) => {
      currentInput = history
      this.setState({
        results: { ...this.state.results },
        histories: [...this.state.histories],
      })
    },
    onHistoryClear: () => {
      currentInput = ''
      this.setState({
        results: {},
        histories: [],
      })
    },
  })

  this.searchResult = new SearchResult({
    targetId: '#app',
    initialState: this.state.results,
  })

  this.setState = (newState) => {
    this.state = newState
    window.localStorage.setItem('appData', JSON.stringify(this.state))

    this.searchInput.setInput(currentInput)
    this.searchResult.setResults(currentInput ? this.state.results[currentInput] : [])
    this.searchHistory.setHistories(this.state.histories)
  }
}

export default App
