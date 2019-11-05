import SearchResult from './components/SearchResult.js'
import SearchInput from './components/Searchinput.js'
import dummy from './dummy.js'
import { isAvailableKeyCode } from './utils.js'

function App(el) {
  this.$el = document.querySelector(el)
  this.searchInput = new SearchInput(this.$el);
  this.searchResult = new SearchResult(this.$el, dummy);
  this.init()
}

App.prototype.init = function() {
  this.bindEvent()
}

App.prototype.bindEvent = function() {
  const $input = this.searchInput.$el
  $input.addEventListener('keyup', async function(e) {
    if (isAvailableKeyCode(e.keyCode)) {
      const result = await this.fetchData(e.target.value)
      this.searchResult.setState(result)
    }
  }.bind(this));
}

App.prototype.fetchData = async function(value) {
  try {
    const data = await fetch(`https://jjalbot.com/api/jjals?text=${value}`)
    return await data.json();
  } catch(e) {
    throw new Error(e.message)
  }
}

App.prototype.render = function() {
  const frag = document.createDocumentFragment()
  frag.appendChild(searchInput.$el)
  frag.appendChild(searchResult.$el)
  this.$el.appendChild(frag)
}

export default App