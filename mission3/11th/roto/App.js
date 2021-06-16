import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { request } from './api.js'

const fetchSearchResult = (keyword) => {
  return request(`/api/jjals?text=${keyword}`)
}

export default function App({ $app, initialState }) {
  this.state = initialState

  this.searchInput = new SearchInput({
    $app,
    onSearch: (keyword) => {
      fetchSearchResult(keyword)
        .then(searchResults => {
          this.setState({ searchResults })
        })
    }
  })

  this.searchResult = new SearchResult({
    $app,
    initialState: this.state.searchResults
  })

  this.setState = (nextState) => {
    this.state = nextState

    this.searchResult.setState(this.state.searchResults)
  }

}