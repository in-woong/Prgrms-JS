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
    this.searchHistory = new SearchHistory({
      target: '#search-history',
      requestData: this.requestData,
    })
    this.searchInput = new SearchInput({
      target: '#search-keyword',
      requestData: this.requestData,
    })
    this.searchResult = new SearchResult(this.data, '#search-result')

    this.validate(this.$element)
  }

  this.validate = $element => {
    validateElement($element)
  }

  this.requestData = async text => {
    this.data = await fetchJjals({ text })
    this.setState({ text })
  }

  this.setState = ({ text }) => {
    this.searchInput.setState(text)
    this.searchResult.setState(this.data)
    this.searchHistory.setState(text)
  }

  this.init()
}

export default App
