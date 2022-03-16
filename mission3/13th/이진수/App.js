import { fetchJjalbot } from './api.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'

function App() {
  this.state = {
    keyword: '',
    searchResult: [],
    history: [],
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  const searchInput = new SearchInput({
    $target: document.querySelector('#search-keyword'),
    initialState: this.state.keyword,
    onSearch: async (keyword = '') => {
      if (!keyword || keyword === '') return
      const searchResult = await fetchJjalbot(keyword)
      this.setState({
        keyword,
        searchResult,
        history: [...this.state.history, keyword],
      })
    },
  })

  const searchResult = new SearchResult({
    $target: document.querySelector('#search-result'),
    initialState: this.searchResult,
  })

  const searchHistory = new SearchHistory({
    $target: document.querySelector('#search-history'),
    initialState: this.searchResult,
    onHistoryClick: async (target = '') => {
      if (!target || target === '') return
      const searchResult = await fetchJjalbot(target)
      this.setState({
        ...this.state,
        keyword: '',
        searchResult,
      })
    },
  })

  this.render = () => {
    searchInput.setState(this.state.keyword)
    searchResult.setState(this.state.searchResult)
    searchHistory.setState(this.state.history)
  }
  this.render()
}

new App()
