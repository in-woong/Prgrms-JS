function SearchResult(data, $searchResult) {
  if (!(this instanceof SearchResult)) {
    throw new Error('SearchResult must be called with new')
  }

  this.data = data
  this.$searchResult = $searchResult

  this.render = function () {
    const htmlString = `${this.data
      .map((d) => `<img src="${d.imageUrl}">`)
      .join('')}`

    this.$searchResult.innerHTML = htmlString
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }
}

export default SearchResult
