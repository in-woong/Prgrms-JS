import { API } from '../api/api.js'
import SearchHistory from './SearchHistory.js'
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
      getData: async (text) => {
        console.log('searchInput - getData')
        const nextState = await API.getData(text)
        this.setState(nextState)
        if (!this.searchHistory.state.includes(text)) {
          this.searchHistory.setState([...this.searchHistory.state, text])
        }
      },
    })
    this.searchHistory = new SearchHistory({
      $app: this.$app,
    })
    this.searchResult = new SearchResult({
      $app: this.$app,
      initialState: this.state,
    })
  }

  render = () => {
    this.searchHistory.render()
    this.searchInput.render()
    this.searchResult.render()
  }

  setState = (nextState) => {
    this.searchResult.setState(nextState)
  }
}

export default App
