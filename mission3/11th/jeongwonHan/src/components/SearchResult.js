function SearchResult({ $target, state }) {
  this.$target = $target
  this.state = state

  this.render = (state) => {
    console.log(state)
    const htmlString = `${
      state
        ? `<div class="no-result">검색 결과가 없습니다😥</div>`
        : state
            .map(
              (gifs) => `
        <div class="gif-wrapper">
            <img src="${gifs.imageUrl}">
        </div>
    `
            )
            .join('')
    }`
    this.$target.innerHTML = htmlString
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render(this.state.gifs)
  }
}

export default SearchResult
