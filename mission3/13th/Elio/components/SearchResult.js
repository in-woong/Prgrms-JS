import { validateInstance, validateArray } from '../utils/validation.js'

function SearchResult({ initialState, $target }) {
  if (validateInstance(this, SearchResult)) return
  this.state = initialState

  this.$searchResult = document.createElement('ul')
  this.$searchResult.classList.add('search-results')
  $target.appendChild(this.$searchResult)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    if (validateArray(this.state)) {
      this.$searchResult.innerHTML = `${this.state
        .map((jjal) => `<li><img src="${jjal.imageUrl}"></li>`)
        .join('')}`
    }
  }

  this.render()
}
export default SearchResult
