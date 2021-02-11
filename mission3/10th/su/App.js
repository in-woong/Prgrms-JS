import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'

import GET from './Api.js'

class App {
  constructor() {
    this.state = { keyword: '', result: [] }
    this.searchKeyword = new SearchKeyword('#search-keyword', this.searchHandler)
    this.searchResult = new SearchResult('#search-result', this.state.result)
    this.searchHistory = new SearchHistory('#search-history', (keyword) => {
      if (keyword) {
        this.searchHandler(keyword)
      }
    })

    this.render()
  }

  searchHandler = async (keyword) => {
    try {
      console.log(keyword, 'keyword')
      const result = await GET(keyword)
      this.setState({ keyword, result })
    } catch (e) {
      console.log(e)
    }
  }

  setState = ({ keyword, result }) => {
    this.state = { keyword, result }
    this.render()
  }

  render = () => {
    this.searchResult.setState(this.state.result)
    this.state.keyword = ''
  }
}

export default App
