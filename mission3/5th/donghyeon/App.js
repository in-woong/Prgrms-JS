import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'

const API_URL = 'https://jjalbot.com/api/jjals?text='

function App($target) {
    this.$target = $target
    this.data = []

    this.search = keyword => {
        this.searchUrl = `${API_URL}${keyword}`
        fetch(this.searchUrl)
        .then(x => x.json())
        .then(data => {
            this.setState(data)
        })
    }

    this.searchKeyword = new SearchKeyword('#search-keyword', { search: this.search })
    this.searchResult = new SearchResult('#search-result', this.data)

    this.setState = (nextData) => {
        this.searchResult.setState(nextData)
    }
}

export default App
