import SearchInput from "./SearchInput.js"
import SearchResult from "./SearchResult.js"

const fetchSearchResult = () => {
  return fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
      .then(x => x.json())
      .then(data => {
        console.log(JSON.stringify(data, null, 2))
      })
}

export default function App({ $app, initialState }) {
  this.state = initialState

  this.searchInput = new SearchInput({
    $app,
    onSearch: (keyword) => {
      console.log(keyword)
    }
  })

  this.searchResult = new SearchResult({
    $app,
    initialState: this.state.searchResults
  })

  this.setState = () => {

  }

}