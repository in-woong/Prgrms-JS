import debounce from './debounce.js'

export default function SearchInput({ $target, handleSearch, handleHistory }) {
  const searchInput = document.createElement('input')
  searchInput.className = 'search-keyword'
  $target.appendChild(searchInput)

  searchInput.addEventListener(
    'keyup',
    debounce((e) => {
      if (e.target.className === 'search-keyword') {
        handleSearch(e.target.value)
        handleHistory(e.target.value)
      }
    }, 500)
  )
}
