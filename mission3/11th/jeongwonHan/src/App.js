import SearchInput from './components/SearchInput.js'
import { api } from './api/api.js'

function App($target) {
  this.$target = $target
  this.state = []

  const searchInput = new SearchInput({
    $target: this.$target.querySelector('#search-keyword'),
    state: this.state,
    onSearch: async (keyword) => {
      try {
        const response = await api.fetchGifs(keyword)
        if (!response.ok) {
          if (response < 1) {
            alert('error')
          } else {
            this.setState(response.data)
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
  })

  this.setState = (nextState) => {
    this.state = nextState
    console.log(this.state)
  }
}

export default App
