import SearchKeyword from './SearchKeyword.js'
import dummyData from './dummyData.js'
import SearchResult from "./SearchResult.js"
import SearchHistory from "./SearchHistory.js"

function App() {
    this.render = () => {
        this.searchResult = new SearchResult(dummyData, document.querySelector('#search-result'))
        this.searchHistory = new SearchHistory(document.querySelector('#search-history'), '피자', {
            search: this.search
        })
        this.searchKeyword = new SearchKeyword(document.querySelector('#search-keyword'), {
            search: this.search, addHistory: this.addHistory
        })
    }

    this.search = async (inputData) => {
        await fetch(`https://jjalbot.com/api/jjals?text=${inputData}`)
        .then(x => x.json())
        .then(data => {
            this.setState(data)
        })
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
