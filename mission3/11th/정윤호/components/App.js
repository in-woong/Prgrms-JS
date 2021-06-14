import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'

class App {
  constructor({ $target, initialState }) {
    this.state = initialState
    this.$app = document.createElement('div')
    this.$app.className = 'app'
    $target.appendChild(this.$app)

    this.searchResult = new SearchResult({
      $app: this.$app,
      initialState: this.state,
    })
    this.searchInput = new SearchInput({
      $app: this.$app,
    })
  }

  render = () => {
    this.searchInput.render()
  }

  setState = () => {}
}

export default App
