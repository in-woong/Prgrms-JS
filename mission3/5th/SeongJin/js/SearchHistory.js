import { debounce } from './util.js'

export default function SearchHistory(history, onClickHistory) {
  this.$historyElement = document.querySelector('#search-history')
  this.onClickHistory = onClickHistory
  this.history = history

  this.setState = historyData => {
    this.history = historyData
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
    debounce(e => this.onClickHistory(e.target.textContent), 1000)
  )
}
