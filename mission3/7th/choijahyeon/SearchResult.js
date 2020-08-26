function SearchResult(target, data) {
  this.data = data
  this.$target = target
  this.$result = document.createElement('div')
  this.$target.appendChild(this.$result)
  this.render = () => {
    const htmlString = `${this.data
      .map((d) => `<img src="${d.imageUrl}" alt="${d.tags.join(' ')}">`)
      .join('')}`
    this.$result.innerHTML = htmlString
  }
  this.setState = (data) => {
    this.data = data
    this.render()
  }
  this.render()
}

export default SearchResult
