import { SearchHistory, SearchInput, SearchResult } from './components/index.js'
import { getListByKeyword } from './utils/api/jjalbot.js'
import { debounce } from './utils/etc/performance.js'

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
        }
      },
    })

    this.searchInput = new SearchInput({
      $target,
      onSearch: (value) => {
        debounce(async () => {
          try {
            const data = await getListByKeyword(value)
            const { historyData } = this.state

            this.searchResult.setState(data)

            historyData.unshift(value)
            this.searchHistory.setState(historyData)
          } catch (e) {
            alert(e)
          }
        }, 400)
      },
    })

    this.searchResult = new SearchResult({
      $target,
    })
  }
}
