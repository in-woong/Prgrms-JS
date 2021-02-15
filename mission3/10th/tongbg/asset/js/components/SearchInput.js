function SearchInput({ targetDOM, onSearchInput }) {
  this.$targetDOM = targetDOM

  this.$searchInput = document.createElement('input')
  this.$searchInput.id = 'search-input'

  this.$targetDOM.appendChild(this.$searchInput)
  this.$searchInput.addEventListener('keyup', onSearchInput)

  this.setState = () => {}

  this.render = () => {}
}

export default SearchInput
