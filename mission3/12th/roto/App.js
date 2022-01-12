import SearchInput from "./SearchInput.js"
import SearchHistory from "./SearchHistory.js"
import SearchResults from "./SearchResults.js"
import { request } from "./api.js"

export default function App({ $target }) {
  this.state = {
    histories: []
  }

  const handleSearch = keyword => {
    if (keyword.length > 0) {
      this.setState({
        histories: [...this.state.histories, keyword]
      })
      request(`?text=${keyword}`)
        .then(data => {
          searchResults.setState(data)
        })
    }
  }

  const searchInput = new SearchInput({
    $target,
    onSearch: handleSearch
  })

  const searchHistory = new SearchHistory({
    $target,
    initialState: this.state.histories,
    onHistoryClick: (keyword) => {
      request(`?text=${keyword}`)
        .then(data => {
          searchResults.setState(data)
        })
    }
  })

  const searchResults = new SearchResults({ $target, initialState: []})

  this.setState = nextState => {
    this.state = nextState
    searchHistory.setState(nextState.histories)
  }
}