import SearchResult from './SearchResult.js'
import SearchForm from './SearchForm.js'
import SearchHistory from './SearchHistory.js'
import { isFunction, checkFunctionCalledByNew, validateDOMElement, validateInitialState } from '../validator.js'
import { debounce } from '../utils.js'
import { fetchBySearchKeyword } from '../api.js'

export default function App({ $root, initialState = { searchResults: [], histories: {} } }) {
  try {
    checkFunctionCalledByNew(new.target)
    validateDOMElement($root)
    validateInitialState(initialState)

    this.$root = $root
    this.state = initialState
    this.components = []

    this.render = () => {
      this.components.forEach((component) => 'setState' in component && component.setState(this.state))
    }

    this.setState = (arg) => {
      const newState = isFunction(arg) ? arg(this.state) : { ...this.state, ...arg }
      validateInitialState(newState)
      this.state = newState
      this.render()
    }

    this.searchKeyword = (keyword) => {
      if (keyword.length === 0) return
      debounce({
        callback: async () => {
          const fetchedResult = await fetchBySearchKeyword(keyword)
          const jsonResult = await fetchedResult.json()
          const newHistory = jsonResult.length === 0 ? {} : { [keyword]: keyword }
          this.setState((prev) => ({ searchResults: jsonResult, histories: { ...prev.histories, ...newHistory } }))
        },
        wait: 500,
      })()
    }

    this.init = () => {
      const $searchHistory = document.createElement('ul')
      $searchHistory.id = 'histories'

      const $searchForm = document.createElement('form')
      $searchForm.id = 'form-search'

      const $searchResults = document.createElement('ul')
      $searchResults.id = 'search-results'

      this.components = [
        new SearchHistory({ $target: $searchHistory, state: this.state, searchKeyword: this.searchKeyword.bind(this) }),
        new SearchForm({
          $target: $searchForm,
          searchKeyword: this.searchKeyword.bind(this),
        }),
        new SearchResult({ state: this.state, $target: $searchResults }),
      ]

      this.$root.appendChild($searchHistory)
      this.$root.appendChild($searchForm)
      this.$root.appendChild($searchResults)
    }

    this.init()
  } catch (error) {
    console.log(error)
  }
}
