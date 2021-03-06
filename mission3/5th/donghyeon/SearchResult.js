function SearchResult(target, data) {
  this.$target = document.querySelector(target)
  this.data = data

  this.render = () => {
    const htmlString = `${this.data
      .map(d => `<img src="${d.imageUrl}">`)
      .join('')}`
    this.$target.innerHTML = htmlString
  }

  this.setState = nextData => {
    this.data = nextData
    this.render()
  }

  this.render()
}

export default SearchResult
