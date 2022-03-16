import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import { getImage } from './Api.js'

export default function App({ target }) {
  this.app = target
  this.state = []
  this.history = []

  this.setState = (nextState) => {
    this.state = nextState
    searchResult.setState(this.state)
  }

  this.setHistory = (nextState) => {
    this.history = [...this.history, nextState]
    searchHistory.setState(this.history)
  }

  const handleSearch = async (text) => {
    if (text.length > 0) {
      const data = await getImage(text)
      this.setState(data)
    }
  }

  const handleHistory = (data) => {
    this.setHistory(data)
  }

  const searchInput = new SearchInput({
    $target: this.app,
    handleSearch,
    handleHistory,
  })

  const searchHistory = new SearchHistory({
    $target: this.app,
    initialState: this.history,
    handleSearch,
  })

  const searchResult = new SearchResult({
    $target: this.app,
    initialState: this.state,
  })
}
