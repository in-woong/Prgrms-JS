function SearchInput(onSearchInput) {
  this.$input = document.getElementById('search-input')
  this.debounceTimer = null

  this.setDebounce = (inputValue) => {
    if (inputValue.length === 0) {
      clearTimeout(this.debounceTimer)
      return
    }
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer)
    }
    this.debounceTimer = setTimeout(() => {
      onSearchInput(inputValue)
    }, 1000)
  }

  this.$input.addEventListener('keyup', (e) => {
    this.setDebounce(e.target.value)
  })
}

export default SearchInput
