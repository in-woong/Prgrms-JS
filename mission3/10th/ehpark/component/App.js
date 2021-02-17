import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { dummyData } from '../dummyData.js'

export default function App($app) {
  this.$app = $app

  this.handleSearch = async (value) => {
    try {
      const data = await fetch(`https://jjalbot.com/api/jjals?text=${value}`)
      const resultData = await data.json()
      this.setState(resultData)
    } catch(e) {
      throw new Error(e.message)
    }
  }

  this.render = () => {
    this.searchInput = new SearchInput(this.$app, this.handleSearch.bind(this))
    this.searchResult = new SearchResult(this.$app, dummyData)
  }

  this.setState = (nextState) => {
    this.searchResult.setState(nextState)
  }

  this.render()
}
 