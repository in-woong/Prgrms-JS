import { debounce } from '../utils/debounce.js'

function SearchKeyword($target, onSearch, updateSearchedKeywords) {
  this.init = () => {
    this.$target = $target
    this.timer
    this.searchKeywordDebounce = debounce((keyword) => {
      onSearch(keyword)
      updateSearchedKeywords(keyword)
    }, 1000)
    this.assignEvent()
  }

  this.assignEvent = () => {
    this.$target.addEventListener('keyup', (e) => {
      const value = e.target.value
      this.searchKeywordDebounce(value)
    })
  }

  this.init()
}

export default SearchKeyword
