export default function SearchResult(initialState, $target) {
  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const htmlString = `${this.state
      .map((item) => `<img src="${item.imageUrl}">`)
      .join('')}`
    $target.innerHTML = htmlString
  }

  this.render()
}
