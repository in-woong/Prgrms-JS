import SearchHistory from './SearchHistory.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import ErrorView from './ErrorView.js'
import { $ } from '../utils/index.js'
import { fetchJjals } from '../api/index.js'
import { validateElement } from '../validation/index.js'
import { SEARCH_FAIL_ERROR_MESSAGE } from '../constants/index.js'

function App(target) {
  this.init = () => {
    this.$element = $(target)
    this.data = null
    this.searchHistory = new SearchHistory({
      target: '#search-history',
      onSearch: this.onSearch,
    })
    this.searchInput = new SearchInput({
      target: '#search-keyword',
      onSearch: this.onSearch,
    })
    this.searchResult = new SearchResult({
      data: this.data,
      target: '#search-result',
    })
    this.ErrorView = new ErrorView({ target: '.error-message' })

    this.validate(this.$element)
  }

  this.validate = $element => {
    validateElement($element)
  }

  this.onSearch = async ({ text }) => {
    try {
      this.data = await fetchJjals({ text })
      this.setState(text)
    } catch (error) {
      this.ErrorView.setState(SEARCH_FAIL_ERROR_MESSAGE)
    }
  }

  this.setState = inputValue => {
    this.searchInput.setState(inputValue)
    this.searchResult.setState(this.data)
    this.searchHistory.setState(inputValue)
  }

  this.init()
}

export default App
