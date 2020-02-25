import SearchKeyword from "./SearchKeyword.js"
import SearchResult from "./SearchResult.js"
import SearchHistory from "./SearchHistory.js"

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
        const res = await fetch(`https://jjalbot.com/api/jjals?text=${inputData}`)
        const data = await res.json()
        this.setState(data)
    }

    this.addHistory = (inputData) => {
        this.searchHistory.setState(inputData)
    }

    this.setState = (nextData) => {
        this.searchResult.setState(nextData)
    }

    this.render()
}

export default App
