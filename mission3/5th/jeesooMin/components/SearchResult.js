function SearchResult(data, $target) {
  if (!(this instanceof SearchResult)) {
    throw new Error('[SearchResult] new 키워드로 실행되지 않았습니다.')
  }

  this.data = data
  this.$target = $target

  this.render = function() {
    if (this.data) {
      this.$target.innerHTML = `${this.data
        .map(d => `<img class="image" src="${d.imageUrl}">`)
        .join('')}`
    }
  }

  this.setState = function(newData) {
    this.data = newData
    this.render()
  }

  this.render()
}

export default SearchResult
