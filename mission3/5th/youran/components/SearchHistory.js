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
    let htmlString = ''
    this.historyData.forEach(
      keyword =>
        (htmlString += `<span id="history-keyword" data-value=${keyword}>#${keyword}</span>`)
    )
    this.$searchHistory.innerHTML = htmlString
  }

  this.$searchHistory.addEventListener('click', event => {
    if (event.target.nodeName === 'SPAN') {
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
