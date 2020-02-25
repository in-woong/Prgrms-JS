import SearchResult from './SearchResult.js'
import SearchKeyword from './SearchKeyword.js'
import SearchHistory from './SearchHistory.js'

// import { dummyData } from "./dummyData.js";

export default function main() {
  this.init = () => {
    this.$resultElement = document.querySelector('#search-result')
    this.searchResult = new SearchResult([], this.$resultElement)
    this.history = []
    this.searchKeyword = new SearchKeyword(this.search)
    this.searchHistory = new SearchHistory(this.searchHistory, this.search)
  }

  this.search = async e => {
    console.log(e.target.textContent)
    try {
      const data = await fetch(
        `https://jjalbot.com/api/jjals?text=${e.target.value}`
      )

      const datajson = await data.json()
      this.searchResult.setState(datajson)
      if (this.history === null) {
        this.history = new Set(e.targert.value)
      } else if (!this.history.includes(e.target.value)) {
        this.history.push(e.target.value)
      }
      this.searchHistory.setState(this.history)
    } catch (e) {
      throw new Error(e)
    }
  }
  this.init()
}
