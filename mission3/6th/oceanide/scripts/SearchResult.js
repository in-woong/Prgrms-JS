function SearchResult(data, $searchResult) {
  if (!(this instanceof SearchResult)) {
    throw new Error('SearchResult must be called with new')
  }

  this.images = data
  this.$searchResult = $searchResult

  this.render = function () {
    const htmlString = `${this.images
      .map(
        (image) => `<li><img src="${image.imageUrl}" alt=${image.title}></li>`
      )
      .join('')}`

    this.$searchResult.innerHTML = htmlString
  }

  this.setState = function (nextData) {
    this.images = nextData
    this.render()
  }
}

export default SearchResult
