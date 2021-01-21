import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'
import getGifImages from './util/api.js'

export default class App {
  constructor({ target }) {
    this.target = document.querySelector(target)
    this.data = []
    this.searchResult = new SearchResult({
      target: '#search-result',
      data: this.data,
    })
    this.searchInput = new SearchInput({
      target: '#search-keyword',
      event: this.onSearchKeyword,
    })
  }

  onSearchKeyword = async (keyword) => {
    const dataArray = await getGifImages(keyword)
    this.data = dataArray

    this.searchResult.setState(this.data)
  }
}
