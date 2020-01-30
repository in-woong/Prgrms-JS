import SearchHistory from './SearchHistory.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchError from './SearchError.js'
import { getImgData } from '../api.js'
import { debounce, checkArray, ERROR_MSG } from '../utils.js'
import { dummyData } from '../dummyData.js'

export default function App() {
  const HISTORY_MAX = 5

  this.data = dummyData
  this.history = []

  //components
  console.log(this.history)
  this.searchHistory = new SearchHistory({
    $target: document.querySelector('#search-history'),
    historyList: this.history,
    onclickHistory: async value => {
      this.fetchImgData(value, true)
    },
  })
  this.searchInput = new SearchInput({
    $target: document.querySelector('#search-keyword'),
    inputValue: '',
    onSearch: debounce(async ({ target: { value } }) => {
      this.fetchImgData(value)
    }, 200),
  })
  this.searchResult = new SearchResult({
    $target: document.querySelector('#search-result'),
    resultData: this.data,
  })
  this.searchError = new SearchError({
    $target: document.querySelector('#search-error'),
  })

  this.fetchImgData = async (value, isFromHistory = false) => {
    try {
      // 히스토리에서 검색한 경우 인풋에 해당 텍스트 셋팅
      if (isFromHistory) {
        this.setKeyword(value)
      }

      const data = await getImgData(value)
      const errMsg = data.length > 0 ? '' : '검색 결과가 없습니다.'
      if (data.length > 0 && !isFromHistory) {
        this.addHistory(value)
      }
      this.setState(data)
      this.setErrorMessage(errMsg)
    } catch (error) {
      this.setState([])
      this.setErrorMessage(error.message)
    }
  }

  this.addHistory = keyword => {
    this.history = [...new Set([...this.history, keyword])]
    if (this.history.length > HISTORY_MAX) {
      this.history.shift()
    }
    this.searchHistory.setState(this.history)
  }

  this.setKeyword = keyword => {
    this.searchInput.setState(keyword)
  }

  this.setState = newData => {
    if (!checkArray(newData)) throw new Error(ERROR_MSG.STRING)
    this.data = newData
    this.searchResult.setState(this.data)
  }

  this.setErrorMessage = msg => {
    this.searchError.setState(msg)
  }
}
