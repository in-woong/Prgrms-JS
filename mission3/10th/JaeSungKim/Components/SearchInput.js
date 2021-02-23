import { debounce } from '../utils.js'

function SearchInput({ targetId, onSearchInput }) {
  if (!(this instanceof SearchInput)) {
    return new SearchInput({ targetId, onSearchInput })
  }

  const $target = document.querySelector(targetId)
  const $searchInput = document.createElement('input')
  $target.appendChild($searchInput)

  $searchInput.addEventListener('input', (e) => {
    const input = e.target.value
    debounce(() => {
      onSearchInput(input)
    }, 600)
  })

  this.setInput = (newInput) => {
    $searchInput.value = newInput
  }
}

export default SearchInput
