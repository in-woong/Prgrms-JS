import { createElement, checkUsedNewKeyword } from './utils.js'

function SearchInput(onKeyup, target) {
  checkUsedNewKeyword(SearchInput)
  this.onKeyup = onKeyup

  const $searchInput = createElement('input', 'id', 'search-input')
  target.appendChild($searchInput)

  document.querySelector('#search-input').addEventListener("keyup", (e) => this.onKeyup(e.target.value))
}

export default SearchInput
