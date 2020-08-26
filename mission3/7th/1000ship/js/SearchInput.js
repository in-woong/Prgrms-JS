import api from './api.js'
import { debounce } from './utils.js'

function SearchInput(
  state,
  $searchInputEl,
  { onSearchStart, onSearchComplete, onSearchError },
  debounceThreshold
) {
  this.$searchInputEl = $searchInputEl
  this.debounceThreshold = debounceThreshold
  this.onSearchStart = onSearchStart
  this.onSearchComplete = onSearchComplete
  this.onSearchError = onSearchError
  this.state = state

  this.setState = (state) => {
    this.state = state
    this.render()
  }

  this.render = () => {
    this.$searchInputEl.value = this.state.term
  }

  this.search = async (e) => {
    const term = e.target.value.trim()
    if (term.length === 0) return
    try {
      this.onSearchStart(term)
      const data = await api.search(term)
      this.onSearchComplete(data, term)
    } catch (error) {
      this.onSearchError(error, term)
    }
  }
  this.$searchInputEl.onkeyup = debounce(this.search, this.debounceThreshold)
}

export default SearchInput
