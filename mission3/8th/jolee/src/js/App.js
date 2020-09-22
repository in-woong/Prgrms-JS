import SearchResult from './SearchResult.js'
import dummyData from './dummyData.js'
import { serachJjals, debounce } from './utils.js'

function App() {
  this.init = function () {
    this.searchResult = new SearchResult(dummyData, '#search-result')
    document.querySelector('#search-keyword').addEventListener('keyup', (e) =>
      debounce(async () => {
        const data = await serachJjals(
          `https://jjalbot.com/api`,
          e.target.value
        )
        this.setState(data)
      })
    )
  }

  this.setState = function (data) {
    this.searchResult.setState(data)
  }

  this.init()
}

export default App
