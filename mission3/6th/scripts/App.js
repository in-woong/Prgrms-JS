import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'

class App {
  constructor() {
    this.$searchResult = document.querySelector('#search-result')
    this.data = []
    new SearchInput(this.searchHandler)
  }

  searchHandler = (keyword) => {
    this.getData(keyword)
  }

  getData = (keyword) => {
    fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
      .then((data) => data.json())
      .then((data) => {
        this.setState(data)
        this.render()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  setState = (data) => {
    this.data = data
  }

  render = () => {
    new SearchResult(this.data, this.$searchResult)
  }
}

new App()
