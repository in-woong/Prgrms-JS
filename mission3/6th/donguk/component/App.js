import Component from './Component.js'
import SearchHistory from './SearchHistory.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { getSearchResult } from '../apis/api.js'
import { checkSelector, checkImages } from '../utils/validation.js'

export default class App extends Component {
  constructor(props) {
    super()
    const { selector, title } = props
    checkSelector(selector)
    this.$target = document.querySelector(selector)
    this.title = title
    this.data = []
    this.histories = []
    this.render()
  }

  render() {
    const searchHistorySelector = 'search-history'
    const searchInputSelector = 'search-input'
    const searchResultSelector = 'search-result'
    this.$target.innerHTML = `<div>
                                <h1>${this.title}</h1>
                                <ul class=${searchHistorySelector}></ul>
                                <div class=${searchInputSelector}></div>
                                <div class=${searchResultSelector}></div>
                              </div>`

    this.$searchHistory = new SearchHistory({
      selector: `.${searchHistorySelector}`,
      histories: this.histories,
      onSearch: this.handleSearch.bind(this),
    })

    new SearchInput({
      selector: `.${searchInputSelector}`,
      onSearch: this.handleSearch.bind(this),
      onAddHistory: this.handleAddHistory.bind(this),
    })

    this.$searchResult = new SearchResult({
      selector: `.${searchResultSelector}`,
      images: this.data,
    })
  }

  setState(nextData) {
    if (JSON.stringify(this.data) !== JSON.stringify(nextData)) {
      checkImages(nextData)
      this.data = nextData
      this.$searchResult.setState(nextData)
    }
  }

  async handleSearch(keyword) {
    if (keyword) {
      const result = await getSearchResult(keyword)
      if (result.length > 0) {
        const nextData = result.map((element) => element.imageUrl)
          .filter((element) => element)
        this.setState(nextData)
      }
    }
  }

  handleAddHistory(keyword) {
    if (keyword) {
      const nextId = this.histories.length > 0 ? Math.max(...this.histories.map((history) => history.id)) + 1 : 0
      this.histories = this.histories.concat({
        id: nextId,
        value: keyword,
      })
      this.$searchHistory.setState(this.histories)
    }
  }
}
