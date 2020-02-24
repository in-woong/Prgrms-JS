import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import { fetchImages } from './api.js'

function App($target) {
    this.$target = $target
    this.data = []
    this.searchedKeywords = new Set()

    this.search = async (queryString) => {
        try {
            const nextData = await fetchImages(queryString)
            this.data = nextData
            this.setState(queryString)
        }
        catch (error) {
             console.error(error)
        }
    } 

    this.searchKeyword = new SearchKeyword('#search-keyword', { search: this.search })
    this.searchResult = new SearchResult('#search-result', this.data)
    this.searchHistory = new SearchHistory('#search-history', this.searchedKeywords)

    this.setState = (queryString) => {
        this.searchResult.setState(this.data)
        this.searchHistory.setState(queryString)
    }
}

export default App
