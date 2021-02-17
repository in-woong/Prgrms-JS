import { isNew } from './common/validateData.js'
import { getBackUpTodo, setBackUpTodo, isExceptionKey, debounce } from './common/util.js'

import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'

const STORED_KEY = 'searchHistory'
const MAX_KEYWORD_COUNT = 5
const DEBOUNCE_TIME = 1000

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

  const fetchAPI = (searchStr) => {
    document.querySelector('#search-input').value = searchStr
    searchStr && getImage(searchStr)
  }

  // API 호출 및 검색어 히스토리 저장
  const getImage = async (searchStr) => {
    const url = `https://jjalbot.com/api/jjals?text=${searchStr}`
    const response = await fetch(url)

    if (response.ok) {
      try {
        const jsonData = await response.json()
        this.setState(jsonData, searchStr)
      } catch {
        throw new Error(ERROR_MSG.JSON_PARSE_ERROR)
      }
    } else {
      throw new Error(ERROR_MSG.NETWORK_NOT_OK)
    }
  }

  // input 키보드 입력
  const onKeyupInput = (e) => {
    if (isExceptionKey(e.key)) return

    // Enter 입력시 바로 검색, 검색어가 없는 경우는 동작하지 않음
    if (e.key === 'Enter') {
      return fetchAPI(document.querySelector('#search-input').value.trim())
    }

    debounce.call(this, fetchAPI, DEBOUNCE_TIME)
  }

  // history 클릭시 검색
  const onClickHistory = (e) => {
    const searchStr = e.target.innerText
    document.querySelector('#search-input').value = searchStr
    getImage(searchStr)
  }

  this.setState = (newState, searchStr) => {
    this.searchResultData = newState
    this.searchResult.setState(this.searchResultData)

    // searchHistory 5개까지만, 가장 이전의 것 삭제
    if (this.searchHistory.has(searchStr)) {
      this.searchHistory.delete(searchStr)
    } else if (this.searchHistory.size >= MAX_KEYWORD_COUNT) {
      this.searchHistory.delete([...this.searchHistory][0])
    }
    this.searchHistory.add(searchStr)

    this.searchInput.setState(this.searchHistory)
    setBackUpTodo(STORED_KEY, [...this.searchHistory])
  }

  this.render = () => {}

  this.searchInput = new SearchInput({ targetDOM: this.$innerDOM, initData: this.searchHistory, onKeyupInput, onClickHistory })
  this.searchResult = new SearchResult({ targetDOM: this.$innerDOM, initData: this.searchResultData })
}

export default App
