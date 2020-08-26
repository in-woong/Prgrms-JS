function SearchResult($target, data) {
  this.$target = $target
  this.data = data

  this.setState = (newData) => {
    this.data = newData
    this.render()
  }

  this.render = () => {
    const htmlString = `${this.data
      .map((d) => `<img src="${d.imageUrl}">`)
      .join('')}`

    this.$target.innerHTML = htmlString
  }

  this.render()
}

export default SearchResult
