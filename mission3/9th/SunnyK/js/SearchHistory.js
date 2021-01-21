import { checkNewKeyword } from './util/validation.js'

export default function SearchHistory({
  $app,
  searchHistoryData,
  onSearch,
  doClearSearchHistory,
}) {
  checkNewKeyword(new.target)

  this.searchHistoryData = searchHistoryData
  this.onSearch = onSearch
  this.doClearSearchHistory = doClearSearchHistory

  this.init = () => {
    const $target = document.createElement('div')
    $target.className = 'SearchHistory'
    this.$target = $target
    $app.appendChild(this.$target)

    const $historyList = document.createElement('ul')
    $historyList.className = 'history-list'
    this.$historyList = $historyList
    $target.appendChild(this.$historyList)

    const $historyClearBtn = document.createElement('button')
    $historyClearBtn.className = 'clear-history-btn'
    $historyClearBtn.innerHTML = 'Clear History'
    this.$historyClearBtn = $historyClearBtn
    $target.insertAdjacentElement('beforeend', $historyClearBtn)
  }

  this.init()

  this.$historyList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      this.onSearch(e.target.innerHTML)
    }
  })

  this.$historyClearBtn.addEventListener('click', this.doClearSearchHistory)

  this.setState = (nextSearchHistoryData) => {
    this.searchHistoryData = nextSearchHistoryData
    this.render()
  }

  this.render = () => {
    this.$historyList.innerHTML = this.searchHistoryData
      .map((keyword) => `<li>${keyword}</li>`)
      .join('\n')
  }

  this.render()
}
