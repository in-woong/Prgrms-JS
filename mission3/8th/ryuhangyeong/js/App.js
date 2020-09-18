import { SearchHistory, SearchInput, SearchResult } from './components/index.js'
import { getJjalListByKeyword } from './utils/api/jjals.js'
import debounce from './utils/etc/debounce.js'

export default class App {
  state = {
    historyData: [],
  }

  constructor($target) {
    try {
      this.searchHistory = new SearchHistory({
        $target,
        onSearch: async (value) => {
          const data = await getJjalListByKeyword(value)
          this.searchResult.setState(data)
        },
      })

      this.searchInput = new SearchInput({
        $target,
        onSearch: async (value) => {
          const DEBOUNCE_TIME = 700

          debounce(async () => {
            const { historyData } = this.state
            const idx = historyData.indexOf(value)

            if (idx > -1) this.state.historyData.splice(idx, 1)

            const data = await getJjalListByKeyword(value)

            this.searchResult.setState(data)
            this.state.historyData = [value, ...historyData]
            this.searchHistory.setState(this.state.historyData)
          }, DEBOUNCE_TIME)
        },
      })

      this.searchResult = new SearchResult({
        $target,
      })
    } catch (e) {
      alert(e) // 에러 전파가 정상적으로 되지 않는 듯 합니다. 어느 부분을 살펴보면 좋을까요? 혹은 힌트라도 주시면 찾아서 해보겠습니다!
    }
  }
}
