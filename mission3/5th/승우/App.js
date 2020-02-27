//App.js
// import { fetchJalData } from './Api'

function App() {
  //functions
  this.fetchJalData = async keyword => {
    try {
      const response = await fetch(`${API_URL}${keyword}`)
      const result = response.json()
      return result
    } catch (e) {
      errorView.setState(e.message)
    }
  }

  this.renderImageData = async keyword => {
    try {
      const resultData = await this.fetchJalData(keyword)
      this.data = resultData
      this.searchResult.setState(resultData)
    } catch (e) {
      errorView.setState(e.message)
    }
  }

  this.addHistory = keyword => {
    if (keyword !== '') {
      const newHistoryData = [...this.historyData, keyword]
      this.historyData = newHistoryData
      this.searchHistory.setState(newHistoryData)
    }
  }

  this.onKeyUp = debounce(e => {
    this.renderImageData(e.target.value)
    this.addHistory(e.target.value)
    e.target.value = ''
  }, debounceTime)

  this.init = () => {
    //data 초기화
    this.data = []
    this.historyData = []

    try {
      //Component 선언
      this.errorView = new ErrorView({ $selector: ERROR_VIEW_SELECTOR })

      this.$searchKeyword = new SearchKeyword({
        $selector: SEARCH_KEYWORD_SELECTOR,
        onKeyUp: this.onKeyUp,
      })

      this.searchResult = new SearchResult({
        data: this.data,
        $selector: SEARCH_RESULT_SELECTOR,
      })

      this.searchHistory = new SearchHistory({
        historyData: this.historyData,
        $selector: SEARCH_HISTORY_SELECTOR,
        onSearch: this.renderImageData,
      })
    } catch (e) {
      this.errorView.setState(e)
    }
  } //End Init

  this.init()
}
