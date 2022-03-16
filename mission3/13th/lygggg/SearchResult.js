export default function SearchResult({ $target, initialState }) {
  this.state = initialState
  const searchResult = document.createElement('div')
  $target.appendChild(searchResult)
  this.render = function () {
    searchResult.innerHTML = `${this.state
      .map((d) => `<img alt=${d.title} src="${d.imageUrl}">`)
      .join('')}`
  }

  SearchResult.prototype.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render()
}
