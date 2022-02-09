import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { fetchJjalImages } from './api.js'
import SearchHistory from './SearchHistory.js'

export default function App({ $target }) {
  this.state = {
    keyword: '',
    histories: [],
    searchResults: [],
  }

  const searchInput = new SearchInput({
    $target,
    initialState: this.state.keyword,
    onSearch: async (keyword) => {
      try {
        const data = await fetchJjalImages(keyword)

        const nextHistories = [...this.state.histories]

        const historyIndex = nextHistories.findIndex(
          (history) => history === keyword
        )

        if (historyIndex > -1) {
          nextHistories.splice(historyIndex, 1)
        }
        nextHistories.push(keyword)

        this.setState({
          histories: nextHistories,
          searchResults: data,
        })
      } catch (e) {
        alert(e.message)
      }
    },
  })

  const searchHistory = new SearchHistory({
    $target,
    onClick: async (keyword) => {
      try {
        const data = await fetchJjalImages(keyword)

        this.setState({
          keyword,
          histories: this.state.histories,
          searchResults: data,
        })
      } catch (e) {
        alert(e.message)
      }
    },
  })

  const searchResult = new SearchResult({
    $target,
    initialState: this.state.searchResults,
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    searchInput.setState(this.state.keyword)
    searchHistory.setState(this.state.histories)
    searchResult.setState(this.state.searchResults)
  }
}
