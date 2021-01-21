import { checkFunctionCalledByNew, validateDOMElement, validateSearchResults } from '../validator.js'

export default function SearchResult({ state: { searchResults }, $target }) {
  try {
    checkFunctionCalledByNew(new.target)
    validateDOMElement($target)
    validateSearchResults(searchResults)

    this.searchResults = searchResults
    this.$target = $target

    this.setState = ({ searchResults }) => {
      validateSearchResults(searchResults)
      this.searchResults = searchResults
      this.render()
    }

    this.render = () => {
      this.$target.innerHTML = this.searchResults.length === 0 ? '<span>검색 결과가 없습니다</span>' : this.searchResults.reduce((htmlString, { _id, title, imageUrl }) => htmlString + `<li id="${_id}"><img src="${imageUrl}" alt="${title}" /></li>`, '')
    }

    this.render()
  } catch (error) {
    console.log(error)
  }
}
