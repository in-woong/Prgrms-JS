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
    //나호석님 코드 참조 #143
    this.historyData = new Set()

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

  this.setKeywordHistory = keyword => {
    const newData = this.historyData
    if (newData.has(keyword)) {
      newData.delete(keyword)
      newData.add(keyword)
    }
    this.historyData = newData.add(keyword)
    this.searchHistory.setState(this.historyData)
    this.searchKeyword.setState('')
  }

  const getResultData = async searchKeyword => {
    if (typeof searchKeyword !== 'string' || searchKeyword.length < 1) return
    try {
      const jsonData = await loadJSONData(`${searchKeyword}`)
      this.setState(generateResultData(jsonData))
      this.setKeywordHistory(searchKeyword)
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
