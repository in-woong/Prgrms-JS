export default function SearchResult({ initialState, $target }) {
  this.state = initialState
  this.$target = $target

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const htmlString =
      this.state.length > 0
        ? this.state.map(d => `<img src="${d.imageUrl}"></img>`).join('')
        : '<span>검색 결과가 존재하지 않습니다</span>'
    this.$target.innerHTML = htmlString
  }

  this.render()
}
