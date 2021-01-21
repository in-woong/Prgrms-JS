import SearchHistory from './SearchHistory.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { fetchMemes } from './util/api.js'
import {
  getSessionStorageItem,
  setSessionStorageItem,
} from './util/sessionStorage.js'
import {
  checkNewKeyword,
  isArrayState,
  checkArrayStateTypes,
} from './util/validation.js'

const SEARCH_HISTORY_KEY = 'history'

export default class App {
  constructor({ $app }) {
    checkNewKeyword(new.target)

    this.$app = $app
    this.memeData = []
    this.searchHistoryData = getSessionStorageItem({
      key: SEARCH_HISTORY_KEY,
      defaultValue: [],
    })

    this.searchInput = new SearchInput({
      $app,
      onSearch: this.onSearch.bind(this),
    })
    this.searchHistory = new SearchHistory({
      $app,
      searchHistoryData: this.searchHistoryData,
      onSearch: this.onSearchWithHistory.bind(this),
      doClearSearchHistory: this.doClearSearchHistory.bind(this),
    })
    this.searchResult = new SearchResult({ $app, memeData: this.memeData })
  }

  validateMemeData(state) {
    try {
      isArrayState(state)
      checkArrayStateTypes(
        state,
        (data) =>
          typeof data.imageUrl === 'string' && typeof data.title === 'string'
      )
    } catch (e) {
      alert('Error: 올바르지 않은 형식의 검색 결과 데이터')
      console.error(e)
    }
  }

  setState({ nextMemeData, nextSearchHistoryData }) {
    if (nextMemeData) {
      this.validateMemeData(nextMemeData)
      this.memeData = nextMemeData
      this.searchResult.setState(this.memeData)
    }

    if (nextSearchHistoryData) {
      this.searchHistoryData = nextSearchHistoryData
      setSessionStorageItem({
        key: SEARCH_HISTORY_KEY,
        item: this.searchHistoryData,
      })
      this.searchHistory.setState(this.searchHistoryData)
    }
  }

  onSearchWithHistory(keyword) {
    this.searchInput.setState(keyword)
    this.onSearch(keyword)
  }

  async onSearch(keyword) {
    try {
      const searchResult = await fetchMemes(keyword)

      if (searchResult.length > 0) {
        this.addSearchHistory(keyword)
      }

      this.setState({ nextMemeData: searchResult })
    } catch (error) {
      alert('검색 결과를 가져오는 중에 오류가 발생했습니다.')
      console.error(error)
    }
  }

  addSearchHistory(newKeyword) {
    if (!this.searchHistoryData.find((keyword) => keyword === newKeyword)) {
      this.setState({
        nextSearchHistoryData: [...this.searchHistoryData, newKeyword],
      })
    }
  }

  doClearSearchHistory() {
    this.setState({ nextSearchHistoryData: [] })
  }
}
