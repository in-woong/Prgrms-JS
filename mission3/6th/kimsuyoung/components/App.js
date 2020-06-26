import SearchKeyword from './searchKeyword.js'
import SearchResult from './searchResult.js'
import SearchHistory from './searchHistory.js'
import { loadData } from '../api.js'

export default function App() {
  this.data = {
    images: [],
    keywords: new Set(),
  }

  const onSearch = async (keyword) => {
    try {
      const result = await loadData(keyword)
      this.data.images = result
      this.data.keywords = keyword
      this.setState(this.data)
    } catch (e) {
      console.error(e)
    }
  }

  this.searchKeyword = new SearchKeyword({
    $input: document.querySelector('#search-keyword'),
    onSearch: onSearch,
  })

  this.searchResult = new SearchResult({
    data: this.data.images,
    $result: document.querySelector('#search-result'),
  })

  this.searchHistory = new SearchHistory({
    $history: document.querySelector('#search-history'),
    searchHistorySet: this.data.keywords,
    onSearch: onSearch,
  })

  this.setState = (nextData) => {
    this.data = nextData
    console.log('app this.setState', this.data)
    this.searchResult.setState(nextData.images)
    this.searchHistory.setState(nextData.keywords)
  }
}
