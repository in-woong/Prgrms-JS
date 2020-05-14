import Component from './Component.js'
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
    this.render()
  }

  render() {
    const searchInputSelector = 'search-input'
    const searchResultSelector = 'search-result'
    this.$target.innerHTML = `<div>
                                <h1>${this.title}</h1>
                                <div class=${searchInputSelector}></div>
                                <div class=${searchResultSelector}></div>
                              </div>`
    new SearchInput({
      selector: `.${searchInputSelector}`,
      onSearch: this.handleSearch,
      that: this,
    })
    this.$searchResult = new SearchResult({
      selector: `.${searchResultSelector}`,
      images: this.data,
      that: this,
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
        const nextData = result.map((element) => element.imageUrl).filter((element) => element)
        this.setState(nextData)
      }
    }
  }
}
