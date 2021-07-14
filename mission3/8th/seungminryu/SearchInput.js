function SearchInput(state, $searchInput, { onSearchStart, onSearchComplete }) {
  this.state = state
  this.$searchInput = $searchInput
  this.onSearchStart = onSearchStart
  this.onSearchComplete = onSearchComplete

  this.setState = (state) => {
    this.state = state
    this.render()
  }

  this.render = () => {
    this.$searchInput.value = this.state.term
  }

  this.search = async (e) => {
    const term = e.target.value.trim()
    if (term.length === 0) return
    else {
      this.onSearchStart(term)
      const data = await api.search(term)
      this.onSearchComplete(data, term)
    }
  }
  this.$searchInput.onKeyup =
}
