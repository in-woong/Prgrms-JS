import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'

export default function App({ $target }) {
  this.state = {
    searchResults: [],
  }

  const searchInput = new SearchInput({
    $target,
    onSearch: (keyword) => {
      fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
        .then((x) => x.json())
        .then((data) => {
          this.setState({
            searchResults: data,
          })
        })
    },
  })

  const searchResult = new SearchResult({
    $target,
    initialState: this.state.searchResults,
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    searchResult.setState(this.state.searchResults)
  }
}
