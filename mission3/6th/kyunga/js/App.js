import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import getData from './api.js'

export default function App() {
    this.images = []
    this.histories = new Set()

    this.init = function () {
        this.searchKeyword = new SearchKeyword({
            onKeyup: this.onKeyup,
            $target: document.querySelector('#search-keyword')
        })
        this.searchResult = new SearchResult({
            images: this.images,
            $target: document.querySelector('#search-result')
        })
        this.searchHistory = new SearchHistory({
            onClickHistory: this.onClickHistory,
            histories: this.histories,
            $target: document.querySelector('#search-history')
        })
    }

    this.getApiResponse = async (inputText) => {
        this.images = await getData(inputText)
        this.searchResult.setState(this.images)
    }

    this.onKeyup = (inputText) => {
        this.getApiResponse(inputText)
        this.histories.add(inputText)
        this.searchHistory.setState(this.histories)
    }

    this.onClickHistory = (clickText) => {
        this.getApiResponse(clickText)
    }

    this.init()
}
