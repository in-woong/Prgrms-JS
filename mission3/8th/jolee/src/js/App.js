import SearchResult from './SearchResult.js'
import dummyData from './dummyData.js'
import { searchWord, debounce } from './utils.js'


function App() {
  this.init = function () {
    this.searchResult = new SearchResult(dummyData, '#search-result')
    document
      .querySelector('#search-keyword')
      .addEventListener('keyup', keyupEventListener)
  }

  this.setState = function (data) {
    this.searchResult.setState(data)
  }

  const keyupEventListener = (e) =>
    debounce(async () => {
      const data = await searchWord(`https://jjalbot.com/api`, e.target.value)
      this.setState(data)
    })

  this.init()
}

export default App
