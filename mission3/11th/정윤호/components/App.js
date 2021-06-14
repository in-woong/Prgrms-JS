import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'

class App {
  constructor({ $target, initialState = [] }) {
    this.state = initialState
    this.$app = document.createElement('div')
    this.$app.className = 'app'
    $target.append(this.$app)

    this.searchInput = new SearchInput({
      $app: this.$app,
      onGetData: () => {},
    })
    this.searchResult = new SearchResult({
      $app: this.$app,
      initialState: this.state,
    })
  }

  render = () => {
    this.searchInput.render()
    this.searchResult.render()
  }

  setState = (nextState) => {
    this.searchResult.setState(nextState)
  }
}

export default App
