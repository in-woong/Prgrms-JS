function SearchInput({ $target, state, onSearch }) {
  this.$target = $target
  this.state = state
  this.onSearch = onSearch
  this.timer = null

  this.keyupHandler = (e) => {
    const text = e.target.value
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      this.onSearch(text)
    }, 200)
  }

  this.setState = (nextState) => {
    state = nextState
  }

  this.$target.addEventListener('keyup', this.keyupHandler)
}

export default SearchInput
