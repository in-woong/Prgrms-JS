import { isNew } from '../common/validateData.js'
import SearchHistory from './SearchHistory.js'

function SearchInput({ targetDOM, initData, onKeyupInput, onClickHistory }) {
  if (isNew(new.target)) {
    this.$targetDOM = targetDOM

    this.$searchWarp = document.createElement('div')
    this.$searchWarp.id = 'search-wrap'

    this.$searchInput = document.createElement('input')
    this.$searchInput.id = 'search-input'
    this.$searchInput.placeholder = '검색어를 입력하세요'

    this.$searchWarp.appendChild(this.$searchInput)
    this.$targetDOM.appendChild(this.$searchWarp)

    // input focus 유무에 따른 search-history display 변경
    this.$searchInput.addEventListener('focus', (e) => {
      document.querySelector('#search-history').classList.add('on')
    })

    this.$searchInput.addEventListener('focusout', (e) => {
      document.querySelector('#search-history').classList.remove('on')
    })

    // 입력시 debounce API 호출
    this.$searchInput.addEventListener('keyup', onKeyupInput)
  }

  this.setState = (newState) => {
    this.searchHistory.setState(newState)
  }

  this.render = () => {}

  // 히스토리 컴포넌트 생성
  this.searchHistory = new SearchHistory({ targetDOM: this.$searchWarp, initData, onClickHistory })
}

export default SearchInput
