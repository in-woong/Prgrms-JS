import SearchInput from './Components/SearchInput.js'
import SearchResult from './Components/SearchResult.js'
import SearchHistory from './Components/SearchHistory.js'

function App($app, initialState) {
  if (!(this instanceof App)) {
    return new App()
  }

  this.state = initialState
  let currentInput = ''

  this.searchInput = new SearchInput({
    $app,
    onSearchInput: (input) => {
      onSearch(input)
    },
  })

  this.searchHistory = new SearchHistory({
    $app,
    initialState: this.state.history,
    onHistoryClick: (prevInput) => {
      onSearch(prevInput)
    },
    onHistoryClear: () => {
      currentInput = ''
      this.state = {
        result: {},
        history: [],
      }
      this.setState()
    },
  })

  this.searchResult = new SearchResult({
    $app,
    initialState: this.state.result,
  })

  const onSearch = async (input) => {
    currentInput = input.trim()
    if (currentInput) {
      if (!this.state.history.includes(currentInput)) {
        this.state.result[currentInput] = await fetchImages(currentInput)
        this.state.history = [...this.state.history, currentInput]
      }
      this.setState()
    }
  }

  const fetchImages = (newInput) => {
    return fetch(`https://jjalbot.com/api/jjals?text=${newInput}`)
      .then(async (response) => {
        return await response.json()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  this.setState = () => {
    window.localStorage.setItem('appData', JSON.stringify(this.state))

    this.searchInput.setState(currentInput)
    this.searchResult.setState(currentInput, this.state.result)
    this.searchHistory.setState(this.state.history)
  }
}

export default App
