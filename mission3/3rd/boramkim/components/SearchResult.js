function SearchResult($app, data) {
  this.$app = $app
  this.$el = document.createElement('div')
  this.$el.id = 'search-result'
  this.data = data || []
  this.init()
}

SearchResult.prototype.init = function() {
  this.render()
}

SearchResult.prototype.setState = function(data) {
  console.log('SearchResult setState ~')
  this.data = data
  this.render()
}

SearchResult.prototype.render = function() {
  console.log('SearchResult render ~')
  const { $el, data } = this
  $el.innerHTML = data.map((d) => `<img src="${d.imageUrl}">`).join('')
  this.$app.appendChild($el)
}

export default SearchResult