import getSearchResult from './api.js'
import SearchHistory from './components/SearchHistory.js'
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
        this.setState(data, keyword)
      } catch (error) {
        console.error(error)
      }
    },
  })

  const searchHistory = new SearchHistory({
    $app: this.$app,
    onClickKeyword: async (keyword) => {
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

  this.setState = (nextState, keyword) => {
    validate(nextState)
    this.state = nextState
    keyword && searchHistory.setState(keyword)
    this.render()
  }

  this.render = () => {
    searchResult.setState(this.state)
  }
}
