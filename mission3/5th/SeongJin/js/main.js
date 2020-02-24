import SearchResult from './SearchResult.js'
import SearchKeyword from './SearchKeyword.js'
// import { dummyData } from "./dummyData.js";

export default function main() {
  this.init = () => {
    this.$resultElement = document.querySelector('#search-result')
    this.searchResult = new SearchResult([], this.$resultElement)
    this.searchKeyword = new SearchKeyword(this.search)
  }

  this.search = async e => {
    try {
      const data = await fetch(
        `https://jjalbot.com/api/jjals?text=${e.target.value}`
      ) // async  await 적용하는법?
      const datajson = await data.json()
      this.searchResult.setState(datajson)
    } catch (e) {
      throw new Error(e)
    }
  }
  this.init()
}
