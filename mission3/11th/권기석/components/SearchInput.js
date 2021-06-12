import { debounce } from '../util.js'

export default function SearchInput({ $app, onSearch }) {
  this.$searchInput = document.createElement('input')
  this.$searchInput.id = 'search-keyword'
  this.onSearch = onSearch
  $app.appendChild(this.$searchInput)

  this.$searchInput.addEventListener('input', (e) => {
    if (e.target.value) {
      debounce(() => {
        this.onSearch(e.target.value)
      }, 400)
    }
  })
}
