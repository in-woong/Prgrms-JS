import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import getData from './api.js'

export default function App() {
    this.data = []
    this.historyData = new Set()

    this.init = function () {
        this.searchKeyword = new SearchKeyword(this.onKeyup, '#search-keyword')
        this.searchResult = new SearchResult(this.data, '#search-result')
        this.searchHistory = new SearchHistory(this.onClickHistory, this.historyData, '#search-history')
    }

    this.getApiResponse = async (inputText) => {
        this.data = await getData(inputText)
        this.searchResult.setState(this.data)
    }

    this.onKeyup = (inputText) => {
        this.getApiResponse(inputText)
        this.historyData.add(inputText)
        this.searchHistory.setState(this.historyData)
    }

    this.onClickHistory = (clickText) => {
        this.getApiResponse(clickText)
    }

    this.init()
}
