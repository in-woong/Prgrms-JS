import SearchHistory from './components/SearchHistory.js'
import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'
import jjalbotApi from './util/api/jjalbotApi.js'

class App {
  constructor() {
    const searchHistory = new SearchHistory({
      $target: '#search-history-list',
      initialState: [],
    })

    const searchInput = new SearchInput({
      $target: '#search-keyword',
      onSearch: async (query) => {
        const jjalData = await jjalbotApi.onSearch(query)
        searchHistory.setState([
          ...searchHistory.state,
          { id: Date.now(), text: query },
        ])
        searchResult.setState(jjalData)
      },
    })

    const searchResult = new SearchResult({
      $target: '#search-result',
      initialState: [],
    })
  }
}

const app = new App()
