function SearchResult(data, $target) {
  this.data = data
  this.$target = $target

  this.render = function() {
    $target.innerHTML = this.data.map(item => `<img src="${item.imageUrl}">`).join('')
  }

  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}

export { SearchResult }
