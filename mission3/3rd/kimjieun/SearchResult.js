import { createElement, checkUsedNewKeyword } from './utils.js'

function SearchResult({ data, target }) {
  checkUsedNewKeyword(SearchResult)
  this.data = data
  const $searchResult = createElement('div', 'id', 'search-result')
  target.appendChild($searchResult)

  this.setState = (data) => {
    this.data = data
    this.render()
  }

  this.createSearchResultsHTMLString = () => {
    return this.data.map(d => `<img src="${d.imageUrl}">`).join('')
  }

  this.render = () => {
    const $searchResult = document.querySelector('#search-result')
    $searchResult.innerHTML = this.createSearchResultsHTMLString()
  }
}

export default SearchResult
