function SearchResult({ $app, initialState }) {
  if (!(this instanceof SearchResult)) {
    return new SearchResult({ $target, initialState })
  }

  this.state = initialState

  const $searchResult = document.createElement('div')
  $app.appendChild($searchResult)

  this.render = () => {
    const htmlString = this.state.map((item) => `<img src="${item.imageUrl}">`).join('')
    $searchResult.innerHTML = htmlString
  }

  this.setState = (newInput, newData) => {
    this.state = newInput ? newData[newInput] : []
    this.render()
  }
}

export default SearchResult
