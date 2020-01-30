export default function SearchResult($target) {
  this.$target = $target

  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }

  this.render = function() {
    this.$target.innerHTML = `${this.data
      .map(d => `<img src="${d.imageUrl}">`)
      .join('')}`
  }
}
