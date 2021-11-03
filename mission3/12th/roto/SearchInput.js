
import debounce from './debounce.js'

export default function SearchInput({ $target, onSearch }) {
  this.onSearch = onSearch

  const $searchInput = document.createElement('input')
  $target.appendChild($searchInput)

  this.render = () => {

  }

  $searchInput.addEventListener('keyup', debounce((e) => {
    this.onSearch(e.target.value)
  }, 500))

  this.render()
}