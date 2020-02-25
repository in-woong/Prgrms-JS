import { isSet, isValidtarget } from '../util.js'
import { ERROR_MESSAGE } from '../constant.js'

export default function SearchHistory({ historyData, target, onSearch }) {
  if (!isSet(historyData)) {
    throw new Error(ERROR_MESSAGE.TYPE_ERROR)
  }
  if (!isValidtarget(target)) {
    throw new Error(ERROR_MESSAGE.ELEMENT_ERROR)
  }
  this.historyData = historyData
  this.$searchHistory = document.querySelector(target)
  this.onSearch = onSearch

  this.render = () => {
    this.$searchHistory.innerHTML = Array.from(this.historyData)
      .map(
        keyword =>
          `<span class="history-keyword" data-value=${keyword}>#${keyword}</span>`
      )
      .join('')
  }

  this.$searchHistory.addEventListener('click', event => {
    if (event.target.className === 'history-keyword') {
      this.onSearch(event.target.dataset.value)
    }
  })

  this.setState = newData => {
    if (!isSet(newData)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR)
    }
    this.historyData = newData
    this.render()
  }

  this.render()
}
