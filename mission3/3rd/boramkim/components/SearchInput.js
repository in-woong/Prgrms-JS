function SearchInput($app) {
  this.$app = $app
  this.$el = document.createElement('input')
  this.$el.id = 'search-keyword'
  this.$el.type = 'text'
  this.init()
}

SearchInput.prototype.init = function() {
  this.render()
}

SearchInput.prototype.render = function() {
  this.$app.appendChild(this.$el)
}
 
export default SearchInput