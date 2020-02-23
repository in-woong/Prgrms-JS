import { debounce } from '../util.js'

export default function SearchHistory(historyData, target, { onClick }) {
  if (!Array.isArray(historyData)) {
    throw new Error('올바른 데이터 형식이 아닙니다.')
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
    this.historyData = newData
    this.render()
  }

  this.render()
}
