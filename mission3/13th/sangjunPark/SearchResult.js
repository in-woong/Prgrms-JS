const SearchResult = function ({ initialState, $target }) {
  this.state = JSON.parse(initialState)
  this.$target = $target

  this.render = () => {
    this.$target.innerHTML = this.state
      .map((data) => `<img src="${data.imageUrl}">`)
      .join('')
  }

  this.setState = (nextState) => {
    this.state = [...JSON.parse(nextState)]
    this.render()
  }
}

export default SearchResult
