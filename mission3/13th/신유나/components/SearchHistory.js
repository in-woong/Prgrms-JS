import { debounce } from '../utils/debounce.js'

export default function SearchHistory({ $target, searchHistory, onSearch }) {
  this.state = searchHistory
  this.$ul = document.createElement('ul')
  this.$ul.id = 'search-history'

  $target.prepend(this.$ul)

  this.template = () => {
    return this.state
      .map((keyword) => `<li data-history="${keyword}">${keyword}</li>`)
      .join('')
  }

  this.render = () => {
    this.$ul.innerHTML = this.template()
  }

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.setEvent = () => {
    this.$ul.addEventListener(
      'click',
      debounce(function (e) {
        if (!e.target.closest('[data-history]')) {
          return
        }
        const historyKeyword = e.target.dataset.history
        onSearch(historyKeyword)
      }, 300)
    )
  }

  this.render()
  this.setEvent()
}
