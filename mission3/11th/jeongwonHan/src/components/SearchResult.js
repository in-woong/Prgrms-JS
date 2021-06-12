function SearchResult({ $target, state }) {
  this.$target = $target
  this.state = state

  this.render = (state) => {
    const htmlString = `${state
      .map(
        (gifs) => `
        <div class="gif-wrapper">
            <img src="${gifs.imageUrl}">
        </div>
    `
      )
      .join('')}`
    this.$target.innerHTML = htmlString
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render(this.state)
  }
}

export default SearchResult
