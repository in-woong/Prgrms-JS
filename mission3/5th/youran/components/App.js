import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import { loadJSONData } from '../api.js'
import { SELECTOR } from '../constant.js'

export default function App() {
  const init = () => {
    this.data = []
    this.historyData = []
    this.searchKeyword = new SearchKeyword(SELECTOR.SEARCH_KEYWORD, {
      onKeyUp: getResultData,
    })
    try {
      this.searchResult = new SearchResult(this.data, SELECTOR.SEARCH_RESULT)
      this.searchHistory = new SearchHistory(
        this.historyData,
        SELECTOR.SEARCH_HISTORY,
        { onClick: getResultData }
      )
    } catch (error) {
      console.error(error)
    }
  }

  this.setState = newData => {
    this.data = newData
    this.searchResult.setState(this.data)
  }

  this.setKeywordHistory = (keyword, isFromHistory) => {
    let newData = this.historyData
    if (isFromHistory) {
      newData = newData.filter(text => text !== keyword)
    }
    this.historyData = [...newData, keyword]
    this.searchHistory.setState(this.historyData)
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
