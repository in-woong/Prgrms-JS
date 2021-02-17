import { isNew } from './common/validateData.js'
import { getBackUpTodo, setBackUpTodo, getImage, isExceptionKey } from './common/util.js'

import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'

const STORED_KEY = 'searchHistory'
const MAX_KEYWORD_COUNT = 5

function App($appDOM) {
  if (isNew(new.target)) {
    this.searchResultData = []
    this.searchHistory = getBackUpTodo(STORED_KEY, new Set())
    this.timerId = ''

    this.$appDOM = $appDOM

    this.$innerDOM = document.createElement('div')
    this.$innerDOM.className = 'inner'
    this.$innerDOM.innerHTML = `<h1>움짤 검색기</h1>`

    this.$appDOM.appendChild(this.$innerDOM)
  }

  // input debounce
  const onKeyupInput = (e) => {
    if (isExceptionKey(e.key)) return

    const searchStr = e.target.value.trim()

    // Enter 입력시 바로 검색, 검색어가 없는 경우는 동작하지 않음
    if (e.key === 'Enter') {
      clearTimeout(this.timerId)
      e.target.value = searchStr

      searchStr &&
        getImage(searchStr).then((jsonData) => {
          this.setState(jsonData, searchStr)
        })

      return
    }

    // 디바운스 처리
    if (this.timerId) {
      clearTimeout(this.timerId)
    }

    // 1초 후 검색 세팅
    this.timerId = setTimeout(() => {
      searchStr &&
        getImage(searchStr).then((jsonData) => {
          this.setState(jsonData, searchStr)
        })
    }, 1000)
  }

  // history 클릭시 검색
  const onClickHistory = (e) => {
    const searchStr = e.target.innerText
    document.querySelector('#search-input').value = searchStr

    searchStr &&
      getImage(searchStr).then((jsonData) => {
        this.setState(jsonData, searchStr)
      })
  }

  this.setState = (newState, searchStr) => {
    this.searchResultData = newState
    this.searchResult.setState(this.searchResultData)

    // searchHistory 5개까지만, 가장 이전의 것 삭제
    if (searchStr !== undefined) {
      if (this.searchHistory.has(searchStr)) {
        this.searchHistory.delete(searchStr)
      } else if (this.searchHistory.size >= MAX_KEYWORD_COUNT) {
        this.searchHistory.delete([...this.searchHistory][0])
      }
      this.searchHistory.add(searchStr)

      this.searchInput.setState(this.searchHistory)
      setBackUpTodo(STORED_KEY, [...this.searchHistory])
    }
  }

  this.render = () => {}

  this.searchInput = new SearchInput({ targetDOM: this.$innerDOM, initData: this.searchHistory, onKeyupInput, onClickHistory })
  this.searchResult = new SearchResult({ targetDOM: this.$innerDOM, initData: this.searchResultData })
}

export default App
