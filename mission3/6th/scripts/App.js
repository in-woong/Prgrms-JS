import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'

class App {
  constructor() {
    this.$searchResult = document.querySelector('#search-result')
    this.data = []
    new SearchInput(this.searchHandler)
    this.searchResult = new SearchResult(this.data, this.$searchResult)
  }

  searchHandler = (keyword) => {
    this.getData(keyword)
  }

  getData = async (keyword) => {
    try {
      const data = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
      const jsonData = await data.json()
      this.setState(jsonData)
      this.render()
    } catch (error) {
      console.log(error)
    }
  }

  setState = (data) => {
    this.data = data
  }

  render = () => {
    this.searchResult.setState(this.data)
  }
}

new App()
