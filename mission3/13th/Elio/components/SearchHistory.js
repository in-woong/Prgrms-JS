import { validateInstance, validateArray } from '../utils/validation.js'

function SearchHistory({ initalState, $target, clickHistory }) {
  if (validateInstance(this, SearchHistory)) return
  this.state = initalState

  this.$searchHistory = document.createElement('div')
  $target.appendChild(this.$searchHistory)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$searchHistory.innerHTML = validateArray(this.state)
      ? `${this.state
          .map((history) => `<div class='search-history'>${history}</div>`)
          .join('')}`
      : ''
  }

  this.setEvent = () => {
    this.$searchHistory.addEventListener('click', (e) => {
      clickHistory(e.target.innerText)
    })
  }

  this.render()
  this.setEvent()
}

export default SearchHistory
