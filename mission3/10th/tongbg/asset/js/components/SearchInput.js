import SearchHistory from './SearchHistory.js'

function SearchInput({ targetDOM, onSearchInput, onHistory }) {
  this.$targetDOM = targetDOM

  this.$searchWarp = document.createElement('div')
  this.$searchWarp.id = 'search-wrap'

  this.$searchInput = document.createElement('input')
  this.$searchInput.id = 'search-input'
  this.$searchInput.placeholder = '검색어를 입력하세요'

  this.$searchWarp.appendChild(this.$searchInput)
  this.$targetDOM.appendChild(this.$searchWarp)

  this.$searchInput.addEventListener('focus', (e) => {
    document.querySelector('#search-history').classList.add('on')
  })

  this.$searchInput.addEventListener('focusout', (e) => {
    document.querySelector('#search-history').classList.remove('on')
  })

  this.$searchInput.addEventListener('keyup', onSearchInput)

  this.setState = (newState) => {
    this.searchHistory.setState(newState)
  }

  this.render = () => {}

  this.searchHistory = new SearchHistory({ targetDOM: this.$searchWarp, initData: {}, onHistory })
}

export default SearchInput
