import { validateElement } from '../validator.js'

function SearchHistory({ $history, searchHistorySet, onSearch }) {
  validateElement($history)

  this.render = () => {
    $history.innerHTML = `${[...searchHistorySet]
      .map((value) => `<div class="history-keyword">${value}</div>`)
      .join('')}`
  }

  $history.addEventListener('click', (event) => {
    onSearch(event.target.innerText)
  })

  // 5th 동현님 소스 참조
  this.setState = (keyword) => {
    searchHistorySet.add(keyword)
    console.log('history', searchHistorySet)
    this.render()
  }
}

export default SearchHistory
