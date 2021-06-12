import getSearchResult from './api.js'
import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'
import { validate } from './util.js'

export default function App({ $target }) {
  this.state = []
  this.$app = document.createElement('div')
  this.$app.className = 'app'
  $target.appendChild(this.$app)

  const searchInput = new SearchInput({
    $app: this.$app,
    onSearch: async (keyword) => {
      try {
        const data = await getSearchResult(keyword)
        this.setState(data)
      } catch (error) {
        console.error(error)
      }
    },
  })

  const searchResult = new SearchResult({
    $app: this.$app,
    initialState: this.state,
  })

  this.setState = (nextState) => {
    validate(nextState)
    this.state = nextState
    this.render()
  }

  this.render = () => {
    searchResult.setState(this.state)
  }
}
