import { validateConstructor, setAttr } from './utils.js'

function SearchResult() {
  validateConstructor.call(this)

  this.$searchResultComponent = document.createElement('div')
}

SearchResult.prototype.render = function(data) {
  const resultHtmlString = `${data.map(d => `<img src="${d.imageUrl}">`).join('')}`
  this.$searchResultComponent.innerHTML = resultHtmlString
}

export default SearchResult