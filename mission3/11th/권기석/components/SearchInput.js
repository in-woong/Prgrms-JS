export default function SearchInput({ $app, onSearch }) {
  this.$searchInput = document.createElement('input')
  this.$searchInput.id = 'search-keyword'

  $app.appendChild(this.$searchInput)

  this.$searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (e.target.value) {
        onSearch(e.target.value)
      }
    }
  })
}
