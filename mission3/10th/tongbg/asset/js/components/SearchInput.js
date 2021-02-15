function SearchInput({ $appDOM, onSearchInput }) {
  this.$searchInput = document.createElement('input')
  this.$searchInput.id = 'search-result'

  $appDOM.appendChild(this.$searchInput)
  this.$searchInput.addEventListener('keyup', onSearchInput)

  this.setState = () => {}

  this.render = () => {}
}

export default SearchInput
