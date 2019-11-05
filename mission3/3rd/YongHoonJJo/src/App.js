import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js';
import { validateConstructor, validateArray, isStateEqual } from './utils.js'

function App(element) {
  validateConstructor.call(this)
  if(!element) throw new Error(`There is no element`)

  this.$appComponent = element

  this.init()
}

App.prototype.init = function() {
  this.makeComponent()
}

App.prototype.makeComponent = function() {
  this.searchInput = new SearchInput({
    onDebounce: this.onDebounce.bind(this)
  })
  this.searchResult = new SearchResult()

  this.$appComponent.appendChild(this.searchInput.$inputComponent)
  this.$appComponent.appendChild(this.searchResult.$searchResultComponent)
}

App.prototype.onDebounce = function(elem, url, key) {
  let debounce = null
  elem.addEventListener('keyup', (e) => {
    if(debounce) {
      clearTimeout(debounce)
    }
    debounce = setTimeout(async () => {
      let data = []
      const {value} = e.target
      if(value !== '') {
        const result = await fetch(`${url}?${key}=${value}`)
        data = await result.json()
      }
      this.setState(data)
    }, 300)
  })
}

App.prototype.setState = function(data) {
  validateArray(data) 
  if(!isStateEqual(this.data, data)) {
    this.data = data
    this.render(data)
  } 
}

App.prototype.render = function(data) {
  this.searchResult.render(data)
}

export default App