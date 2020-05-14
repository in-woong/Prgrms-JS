import { MAX_HISTORY_SIZE } from './constant.js'

function SearchHistory(keyword, $searchHistory, $onSearchKeyword) {
  if (!(this instanceof SearchHistory)) {
    throw new Error('SearchHistory must be called with new')
  }

  this.history = []
  this.$searchHistory = $searchHistory

  const addHistory = (keyword) => {
    let history = [...this.history]

    if (!history.includes(keyword)) {
      if (history.length < MAX_HISTORY_SIZE) {
        history = [...history, keyword]
      } else {
        history = [...history.splice(1), keyword]
      }
    }
    return history
  }

  this.bindEvents = function () {
    this.$searchHistory.addEventListener('click', (e) => {
      $onSearchKeyword(e.target.innerHTML)
    })
  }

  this.init = function () {
    this.bindEvents()
  }

  this.render = function () {
    const htmlString = `${this.history
      .map((word) => `<li>${word}</li>`)
      .join('')}`

    this.$searchHistory.innerHTML = htmlString
  }

  this.setState = function (nextData) {
    this.keyword = nextData
    this.history = addHistory(nextData)
    this.render()
  }

  this.init()
}

export default SearchHistory
