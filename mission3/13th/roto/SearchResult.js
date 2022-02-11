export default function SearchResult({ $target, initialState }) {
  this.$searchResult = document.createElement('ul')
  this.state = initialState

  $target.appendChild(this.$searchResult)

  this.setState = (nextState) => {
    // nextState가 의도한 값으로 왔는지 validation
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const htmlString = Array.isArray(this.state)
      ? `${this.state
          .map((d) => `<li><img src="${d.imageUrl}"></li>`)
          .join('')}`
      : ''

    this.$searchResult.innerHTML = htmlString
  }

  this.render()
}
