import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { data } from './data.js'

const ajaxUrl = 'https://jjalbot.com/api/jjals?text='

export default function App($app) {
  this.$target = $app
  this.state = data

  this.setState = (nextState) => {
    this.state = nextState
    searchResult.setState(nextState)
  }

  const fetchData = (e) => {
    if (e.target.value === '') {
      return
    }

    fetch(`${ajaxUrl}${e.target.value}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState(data)
      })
      .catch((error) => console.error(error))
  }

  const searchInput = new SearchInput({
    $target: $app,
    fetchData: fetchData,
  })

  const searchResult = new SearchResult({
    initialState: this.state,
    $target: $app,
  })
}
