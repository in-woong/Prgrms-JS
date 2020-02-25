import { debounce } from './util.js'

export default function SearchHistory(history, search) {
  this.$historyElement = document.querySelector('#search-history')
  this.search = search
  this.history = history

  this.setState = searchHistory => {
    this.history = searchHistory
    this.render()
  }

  this.render = () => {
    const historyString = this.history
      .map(element => `<div>${element}</div>`)
      .join('')
    this.$historyElement.innerHTML = historyString
  }

  this.$historyElement.addEventListener(
    'click',
    debounce(e => this.search(e), 1000)
  )
}
