import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'
import { fetchImages } from './api.js'

function App($target) {
    this.$target = $target
    this.data = []

    this.search = async (queryString) => {
        try {
            const nextData = await fetchImages(queryString)
            this.setState(nextData)
        }
        catch (error) {
            console.error(error)
        }
    } 

    this.searchKeyword = new SearchKeyword('#search-keyword', { search: this.search })
    this.searchResult = new SearchResult('#search-result', this.data)

    this.setState = (nextData) => {
        this.data = nextData
        this.searchResult.setState(nextData)
    }
}

export default App
