import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import loadJjals from './Api.js'

const SEARCH_HISTORY_STROAGE_NAME = 'SearchHistory'

class App {
  constructor() {
    this.state = { keyword: '', result: [], history : [] }

    try {
      this.state.history = JSON.parse(window.localStorage.getItem(SEARCH_HISTORY_STROAGE_NAME)) || []
    } catch (error) {
      this.state.history = []
      console.log(error)
    }

    this.searchKeyword = new SearchKeyword('#search-keyword', this.searchHandler)
    this.searchResult = new SearchResult('#search-result', this.state.result)
    this.searchHistory = new SearchHistory('#search-history',this.state.history, (keyword) => {
      if (keyword) {
        this.searchHandler(keyword)
      }
    })
  }

  searchHandler = async (keyword) => {
    if(!keyword) return; 
    try {
      const result = await loadJjals(keyword)
      this.setState({ keyword, result })
    } catch (e) {
      console.log(e)
    }
  }

  setState = ({ keyword, result }) => {
    this.state = {...this.state, keyword, result}
    this.searchResult.setState(this.state.result)

    if (this.state.history.includes(keyword)) return
    this.state.history = this.state.history.concat(keyword);

    try {
      window.localStorage.setItem(SEARCH_HISTORY_STROAGE_NAME, JSON.stringify(keyword))
    } catch (error) {
      console.log(error)
    }

    this.searchHistory.setState(this.state.history)
    this.state.keyword = ''
  }

  render = () => {

  }
}

export default App
