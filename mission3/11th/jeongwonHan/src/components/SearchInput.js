function SearchInput({ $target, state, onSearch }) {
  this.$target = $target
  this.state = state
  this.onSearch = onSearch

  this.keyupHandler = (e) => {
    if (e.key !== 'Enter') return
    const text = e.target.value
    onSearch(text)
  }

  this.setState = (nextState) => {
    state = nextState
  }

  this.$target.addEventListener('keyup', this.keyupHandler)
}

export default SearchInput
