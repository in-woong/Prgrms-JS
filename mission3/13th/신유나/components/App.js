import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import { API } from '../api/index.js'
import { HISTORY_MAX_COUNT } from '../constants/index.js'

export default function App($target) {
  this.state = {
    results: null,
    searchTerm: '',
    searchHistory: [
      '키위',
      '수박',
      '딸기',
      '바나나',
      '애플',
      '배',
      '메론',
      '체리',
    ],
  }

  const onSearch = async (keyword) => {
    try {
      const response = await API.searchJJal(keyword)
      this.setState({ ...this.state, results: response, searchTerm: keyword })
      addSearchHistory(keyword)
    } catch (error) {
      console.error('🚀 ~ onSearch ~ error', error)
    }
  }

  const addSearchHistory = (keyword) => {
    const history = this.state.searchHistory
    const sameItemIndex = history.findIndex((item) => item === keyword)

    if (sameItemIndex > -1) {
      history.splice(sameItemIndex, 1)
    }
    if (history.length >= HISTORY_MAX_COUNT) {
      history.pop()
    }

    this.setState({
      ...this.state,
      searchHistory: [keyword, ...history],
    })
  }

  const searchInput = new SearchInput({
    $target: $target,
    searchTerm: this.state.searchTerm,
    onSearch,
  })

  const searchResult = new SearchResult({
    $target: $target,
    results: this.state.results,
  })

  const searchHistory = new SearchHistory({
    $target: $target,
    searchHistory: this.state.searchHistory,
    onSearch,
  })

  this.render = () => {
    searchInput.setState(this.state.searchTerm)
    searchResult.setState(this.state.results)
    searchHistory.setState(this.state.searchHistory)
  }

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }
}
