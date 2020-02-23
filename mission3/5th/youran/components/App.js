import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import { loadJSONData } from '../api.js'
import { SELECTOR } from '../constant.js'
import { showErrorMessage } from '../util.js'

export default function App() {
  const init = () => {
    this.keywordString = ''
    this.resultData = []
    this.historyData = []

    try {
      this.searchKeyword = new SearchKeyword({
        keywordString: this.keywordString,
        target: SELECTOR.SEARCH_KEYWORD,
        onKeyUp: getResultData,
      })
      this.searchResult = new SearchResult({
        resultData: this.resultData,
        target: SELECTOR.SEARCH_RESULT,
      })
      this.searchHistory = new SearchHistory({
        historyData: this.historyData,
        target: SELECTOR.SEARCH_HISTORY,
        onClick: getResultData,
      })
    } catch (error) {
      showErrorMessage(error)
    }
  }

  this.setState = newData => {
    this.resultData = newData
    this.searchResult.setState(this.resultData)
  }

  this.setKeywordHistory = (keyword, isFromHistory) => {
    this.historyData = isFromHistory
      ? [...this.historyData.filter(text => text !== keyword), keyword]
      : [...this.historyData, keyword]
    this.searchHistory.setState(this.historyData)
    this.searchKeyword.setState('')
  }

  const getResultData = async (searchKeyword, isFromHistory = false) => {
    if (typeof searchKeyword !== 'string' || searchKeyword.length < 1) return
    try {
      const jsonData = await loadJSONData(`${searchKeyword}`)
      this.setState(generateResultData(jsonData))
      this.setKeywordHistory(searchKeyword, isFromHistory)
    } catch (error) {
      console.error(error)
    }
  }

  init()
}

const generateResultData = jsonData => {
  return jsonData.map(item => ({
    imageUrl: item.imageUrl,
    title: item.title,
  }))
}
