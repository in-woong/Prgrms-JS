import { SearchHistory, SearchInput, SearchResult } from './components/index.js'
import { getListByKeyword } from './utils/api/jjals.js'
import debounce from './utils/etc/debounce.js'

export default class App {
  state = {
    historyData: [],
  }

  constructor($target) {
    this.searchHistory = new SearchHistory({
      $target,
      onSearch: async (value) => {
        try {
          const data = await getListByKeyword(value)
          this.searchResult.setState(data)
        } catch (e) {
          alert(e)
          // throw e
        }
      },
    })

    this.searchInput = new SearchInput({
      $target,
      onSearch: async (value) => {
        debounce(async () => {
          try {
            let { historyData } = this.state

            if (historyData.indexOf(value) > -1) return

            const data = await getListByKeyword(value)

            this.searchResult.setState(data)
            this.state.historyData = [value, ...historyData]
            this.searchHistory.setState(this.state.historyData)
          } catch (e) {
            alert(e)
            // throw e
          }
        }, 700)
      },
    })

    this.searchResult = new SearchResult({
      $target,
    })
  }
}
