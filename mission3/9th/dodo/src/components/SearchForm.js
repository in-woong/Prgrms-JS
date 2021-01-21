import { checkFunctionCalledByNew, validateDOMElement } from '../validator.js'

export default function SearchForm({ $target, searchKeyword }) {
  try {
    checkFunctionCalledByNew(new.target)
    validateDOMElement($target)

    $target.addEventListener('submit', (e) => e.preventDefault())

    const $searchInput = document.createElement('input')
    $searchInput.id = 'input-search'
    $target.appendChild($searchInput)

    this.$target = $searchInput
    this.$target.addEventListener('input', (e) => searchKeyword(e.target.value))
  } catch (error) {
    console.log(error)
  }
}
