function SearchHistory({ $target, state, onSearchHistory }) {
  this.$target = $target
  this.state = state
  this.onSearchHistory = onSearchHistory

  this.onClickHandler = (e) => {
    this.onSearchHistory(e.target.innerText)
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render(this.state)
  }

  this.render = (state) => {
    if (!state.searchHistory) return
    const htmlString = `${state.searchHistory
      .map(
        (history) => ` 
      <span id="${history.id}">
        ${history.text}
      </span> `
      )
      .join('')}`
    this.$target.innerHTML = htmlString
  }

  this.$target.addEventListener('click', this.onClickHandler)
}
export default SearchHistory
