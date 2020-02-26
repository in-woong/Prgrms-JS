import SearchResult from './SearchResult.js'
import SearchKeyword from './SearchKeyword.js'
import SearchHistory from './SearchHistory.js'
import { jjalbotApi } from './util.js'
// import { dummyData } from "./dummyData.js";

export default function main() {
  this.init = () => {
    this.data = null
    this.$resultElement = document.querySelector('#search-result')
    this.searchResult = new SearchResult([], this.$resultElement)
    this.history = []
    this.searchKeyword = new SearchKeyword(this.search)
    this.searchHistory = new SearchHistory(
      this.searchHistory,
      this.onClickHistory
    )
  }

  this.search = async e => {
    this.data = await jjalbotApi(e.target.value).then(data => {
      if (data.length === 0) {
        alert('데이터가 존재하지 않습니다.')
        throw new Error('데이터가 존재하지 않습니다.')
      }
      this.searchResult.setState(data)
    })
    if (this.history === null) {
      this.history = new Set(e.target.value)
    } else if (!this.history.includes(e.target.value)) {
      this.history.push(e.target.value)
    }
    this.searchHistory.setState(this.history)
  }

  this.onClickHistory = async textContent => {
    this.$resultElement.innerHTML = ''
    this.data = await jjalbotApi(textContent).then(data => {
      this.searchResult.setState(data)
    })
  }

  this.init()
}
