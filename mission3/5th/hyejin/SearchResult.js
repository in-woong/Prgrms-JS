function SearchResult(data, $target) {
  this.data = data
  this.$target = $target

  this.setstate = function(nextData) {
    this.data = nextData
    this.render()
  }

  this.render = function() {
    $target.innerHTML = `${this.data
      .map(d => `<img src="${d.imageUrl}">`)
      .join('')}`
  }

  this.render()
}
