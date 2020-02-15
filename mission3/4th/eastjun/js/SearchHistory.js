import { historyItemsTemplate } from './utils/template.js'
import { debounce } from './utils/util.js'
const MAX_COUNT = 3

export default function SearchHistory(search) {
  const $searchHistory = document.querySelector('#search-history')

  this.render = (items) => {
    const html = items.map((item) => historyItemsTemplate(item.keyword)).join('')
    $searchHistory.innerHTML = html
  }

  this.hasKeyword = (newItem, history) => history.some((savedItem) => savedItem.keyword === newItem.keyword)

  this.setState = (item, history) => {
    if (this.hasKeyword(item, history)) return history

    if (history.length >= MAX_COUNT) {
      history.splice(0, 1)
    }

    history.push(item)
    this.render(history)
    return history
  }

  this.searchFromHistory = debounce((e) => search(e), 2000)

  this.initEventListener = () => $searchHistory.addEventListener('click', this.searchFromHistory)
}
