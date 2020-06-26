import { debounce } from './util.js'

function SearchInput($searchInput, onSearchKeyword) {
  if (!(this instanceof SearchInput)) {
    throw new Error('SearchInput must be called with new')
  }

  this.$searchInput = $searchInput

  this.bindEvents = function () {
    this.$searchInput.addEventListener(
      'input',
      debounce((e) => {
        this.keyword = e.target.value
        onSearchKeyword(this.keyword)
      }, 1000)
    )
  }

  this.init = function () {
    this.bindEvents()
  }

  this.render = function () {
    this.$searchInput.value = this.keyword
  }

  this.setState = function (nextData) {
    this.keyword = nextData
    this.render()
  }

  this.init()
}

export default SearchInput
