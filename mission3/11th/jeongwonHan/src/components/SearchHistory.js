function SearchHistory({ $target, state }) {
  this.$target = $target
  this.state = state

  this.setState = (nextState) => {
    this.state = nextState
    this.render(this.state)
  }

  this.render = (state) => {
    if (!state.searchHistory) return
    const htmlString = `${state.searchHistory.map((history) => ` <span>${history}</span> `).join('')}`
    this.$target.innerHTML = htmlString
  }
}
export default SearchHistory
