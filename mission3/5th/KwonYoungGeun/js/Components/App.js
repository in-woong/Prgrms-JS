import SearchHistory from './SearchHistory.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { $ } from '../utils/index.js'
import { fetchJjals } from '../api/index.js'
import { validateElement } from '../validation/index.js'

function App(target) {
  this.init = () => {
    this.$element = $(target)
    this.data = null
    this.SearchHistory = new SearchHistory({
      target: '#search-history',
      onClickHistory: this.onClickHistory,
    })
    this.searchInput = new SearchInput({
      target: '#search-keyword',
      onChange: this.onChange,
    })
    this.searchResult = new SearchResult(this.data, '#search-result')

    this.validate(this.$element)
  }

  this.validate = $element => {
    validateElement($element)
  }

  this.onChange = value => {
    this.setState({ text: value })
  }

  this.onClickHistory = keyword => {
    this.setState({ text: keyword })
  }

  this.setState = async ({ text }) => {
    this.data = await fetchJjals({ text })
    this.searchResult.setState(this.data)
    this.SearchHistory.setState(text)
  }

  this.init()
}

export default App
