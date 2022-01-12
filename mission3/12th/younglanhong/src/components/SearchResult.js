import { validateInstance, validateUrl } from '../utils/validation.js'
import { isEmptyArray } from '../utils/validation.js'

export default function SearchResult({ initialState }) {
  if(validateInstance(this, SearchResult)) return

  this.state = initialState

  const $searchResult = document.querySelector('#search-result')

  this.setState = nextState => {
    this.state = nextState

    this.render()
  }

  this.render = () => {
    const resultTemplate = this.state.map(({ imageUrl, title }) => {
      if(validateUrl(imageUrl)) {
        return `<img class='result-image' src='${imageUrl}' alt='${title}'>` 
      } 
    }).join('')

    const notFoundTemplate = `<p>⚠️검색 결과를 찾을 수 없습니다!</p>`

    $searchResult.innerHTML = !isEmptyArray(this.state) ? resultTemplate : notFoundTemplate
  }
  this.render()
}
