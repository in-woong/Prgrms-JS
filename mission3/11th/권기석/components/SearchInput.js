import { debounce } from '../util.js'

export default function SearchInput({ $app, onSearch }) {
  this.$searchInput = document.createElement('input')
  this.$searchInput.id = 'search-keyword'
  this.onSearch = (keyword) => debounce(() => onSearch(keyword), 600)
  $app.appendChild(this.$searchInput)

  this.$searchInput.addEventListener('keyup', (e) => {
    if (e.target.value) {
      this.onSearch(e.target.value)
    }
  })
}
