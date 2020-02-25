import SearchKeyword from "./SearchKeyword.js"
import SearchResult from "./SearchResult.js"
import SearchHistory from "./SearchHistory.js"
import getSearchData from "./api.js"

function App() {
    this.render = () => {
        this.searchResult = new SearchResult([], document.querySelector('#search-result'))
        this.searchHistory = new SearchHistory(document.querySelector('#search-history'), [], {
            onSearch: this.handleSearch
        })
        this.searchKeyword = new SearchKeyword(document.querySelector('#search-keyword'), {
            onSearch: this.handleSearch, 
            addHistory: this.addHistory
        })
    }

    this.handleSearch = async (inputData) => {
        this.data = await getSearchData(inputData)
        this.searchResult.setState(this.data)
    }

    this.addHistory = (inputData) => {
        if(inputData.length) {
            this.searchHistory.setState(inputData)
        }
    }

    this.render()
}
export default App
