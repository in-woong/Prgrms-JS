import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'

export default function App({ $target }) {
  this.state = {
    result: [],
    word: [],
  }

  this.setState = (nextResult, nextWord) => {
    this.state = {
      result: nextResult,
      word: nextWord ? [...this.state.word, nextWord] : this.state.word,
    }
    searchResult.setState(this.state.result)
    searchHistory.setState(this.state.word)
  }

  const searchHistory = new SearchHistory({
    $target: document.querySelector('#search-history'),
    initialState: this.state.word,
  })

  const searchInput = new SearchInput({
    $target: document.querySelector('#search-input'),
    onGetResult: (data, word) => {
      this.setState(data, word)
    },
  })
  const searchResult = new SearchResult({
    initialState: this.state.result,
    $target: document.querySelector('#search-result'),
  })
}
