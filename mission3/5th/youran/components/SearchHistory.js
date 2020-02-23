import { debounce, isArray } from '../util.js'
import { ERROR_MESSAGE } from '../constant.js'

export default function SearchHistory({ historyData, target, onClick }) {
  if (!isArray(historyData)) {
    throw new Error(ERROR_MESSAGE.TYPE_ERROR)
  }
  this.historyData = historyData
  this.$searchHistory = document.querySelector(target)
  this.onClick = debounce(
    (event, isFromHistory) =>
      onClick(event.target.dataset.value, isFromHistory),
    1000
  )

  this.render = () => {
    this.$searchHistory.innerHTML = this.historyData
      .map(
        keyword =>
          `<span id="history-keyword" data-value=${keyword}>#${keyword}</span>`
      )
      .join('')
  }

  this.$searchHistory.addEventListener('click', event => {
    if (event.target.nodeName === 'SPAN') {
      this.onClick(event, true)
    }
  })

  this.setState = newData => {
    if (!isArray(newData)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR)
    }
    this.historyData = newData
    this.render()
  }

  this.render()
}
