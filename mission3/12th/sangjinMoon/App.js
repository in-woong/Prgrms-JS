import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'

export default function App() {
  this.searchResult = []

  const searchResult = new SearchResult(
    this.searchResult,
    document.querySelector('#search-result')
  )

  this.setState = (nextState) => {
    this.state = nextState
    searchResult.setState(this.state)
  }

  const fetchInput = async (e) => {
    try {
      console.log('inputing')
      const result = await fetch(
        `https://jjalbot.com/api/jjals?text=${e.target.value}`
      )
      const resultJSON = await result.json()
      this.searchResult = [...resultJSON]
      this.setState(this.searchResult)
      console.log(this.searchResult)
    } catch (e) {
      console.error(e)
    }
  }

  const searchInput = new SearchInput(
    document.querySelector('#search-keyword'),
    fetchInput
  )
}
