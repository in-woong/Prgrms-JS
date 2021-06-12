import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'
import { api } from './api/api.js'
import { dummyData } from './util/dummyData.js'

function App($target) {
  this.$target = $target
  this.state = []

  this.state = [...dummyData]
  const searchInput = new SearchInput({
    $target: this.$target.querySelector('.search-keyword'),
    state: this.state,
    onSearch: async (keyword) => {
      try {
        const response = await api.fetchGifs(keyword)
        if (!response.ok) {
          if (!response && response.length < 1) {
            alert('error')
          } else {
            this.setState(response)
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
  })

  const searchResult = new SearchResult({
    $target: this.$target.querySelector('.search-result'),
    state: this.state,
  })

  this.setState = (nextState) => {
    this.state = nextState
    searchResult.setState(this.state)
  }

  searchResult.setState(this.state)
}

export default App
