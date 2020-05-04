function SearchResult($target, data) {
  this.$target = $target
  this.data = data
  this.render = () => {
    $target.innerHTML = `${this.data
      .map(d => `<img width="300px" height="300px" src="${d.imageUrl}">`)
      .join('')}`
  }
  this.setState = data => {
    this.data = data
    this.render()
  }
  this.render()
}
