function SearchResult({ initialState, $target }) {
  this.state = initialState

  this.$searchResult = document.createElement('div')
  $target.appendChild(this.$searchResult)

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    this.$searchResult.innerHTML = `${this.state
      .map((el) => `<img src="${el.imageUrl}">`)
      .join('')}`
  }

  this.render()
}
export default SearchResult
