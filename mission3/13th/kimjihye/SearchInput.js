function SearchInput({ $target, fetchData }) {
  this.$searchInput = document.createElement('input')
  $target.appendChild(this.$searchInput)

  this.setEvent = () => {
    this.$searchInput.addEventListener('keyup', fetchData)
  }

  this.setEvent()
}

export default SearchInput
