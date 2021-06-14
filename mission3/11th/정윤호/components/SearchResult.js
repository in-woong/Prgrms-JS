class SearchResult {
  constructor({ $app, initialState }) {
    this.state = initialState
    this.$target = document.createElement('div')
    this.$target.className = 'search-result'
    $app.append(this.$target)
  }

  render = () => {
    this.$target.innerHTML = this.state.map((data) => `<img src=${data.imageUrl}>`).join('')
  }

  setState = (nextState) => {
    this.state = nextState
    this.render()
  }
}

export default SearchResult
