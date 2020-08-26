import SearchHistory from './SearchHistory.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'

export default function App() {
  this.$searchHistory = document.querySelector('#search-history')
  this.$searchInput = document.querySelector('#search-input')
  this.$searchResult = document.querySelector('#search-result')
  this.data = {
    images: [],
    histories: [],
  }

  this.searchKeyword = async (keyword, addHistory = false) => {
    try {
      const response = await fetch(
        `https://jjalbot.com/api/jjals?text=${keyword}`
      )
      const data = await response.json()

      this.setState({
        ...this.data,
        images: data,
        histories: addHistory
          ? [...this.data.histories, keyword]
          : [...this.data.histories],
      })
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  this.setState = (newData) => {
    this.data = newData
    this.render()
  }

  this.render = () => {
    this.searchHistory.setState(this.data.histories)
    this.searchResult.setState(this.data.images)
  }

  try {
    this.searchHistory = new SearchHistory(
      this.$searchHistory,
      this.data.histories,
      this.searchKeyword
    )
    this.searchInput = new SearchInput(this.$searchInput, this.searchKeyword)
    this.searchResult = new SearchResult(this.$searchResult, this.data.images)
  } catch (error) {
    const $error = document.createElement('div')
    $error.innerHTML = error
    this.$app.innerHTML = ''
    this.$app.appendChild($error)
  }
}
