import { isNew } from './common/validateData.js'
import { getBackUpSearchHistory, setBackUpSearchHistory, isExceptionKey, debounce } from './common/util.js'
import { getImage } from './common/api.js'

import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'

const STORED_KEY = 'searchHistory'
const MAX_KEYWORD_COUNT = 5
const DEBOUNCE_TIME = 1000

function App($appDOM) {
  if (isNew(new.target)) {
    this.state = {
      searchResultData: [],
      searchHistory: getBackUpSearchHistory(STORED_KEY, new Set()),
    }

    this.timerId = null

    this.$appDOM = $appDOM

    this.$innerDOM = document.createElement('div')
    this.$innerDOM.className = 'inner'
    this.$innerDOM.innerHTML = `<h1>움짤 검색기</h1>`

    this.$appDOM.appendChild(this.$innerDOM)
  }

  const fetchAPI = async (searchStr) => {
    searchStr = searchStr ? searchStr : document.querySelector('#search-input').value.trim()
    document.querySelector('#search-input').value = searchStr

    if (searchStr) {
      const jsonData = await getImage(searchStr)
      let tempHistory = new Set([...this.state.searchHistory])

      // searchHistory 5개까지만, 가장 이전의 것 삭제
      if (tempHistory.has(searchStr)) {
        tempHistory.delete(searchStr)
      } else if (tempHistory.size >= MAX_KEYWORD_COUNT) {
        tempHistory.delete([...tempHistory][0])
      }
      tempHistory.add(searchStr)

      this.setState({
        searchResultData: jsonData,
        searchHistory: tempHistory,
      })
    }
  }

  // input 키보드 입력
  const onKeyupInput = (e) => {
    if (isExceptionKey(e.key)) return

    // Enter 입력시 바로 검색, 검색어가 없는 경우는 동작하지 않음
    if (e.key === 'Enter') {
      clearTimeout(this.timerId)
      return fetchAPI()
    }

    debounce.call(this, fetchAPI, DEBOUNCE_TIME)
  }

  // history 클릭시 검색
  const onClickHistory = (e) => {
    const searchStr = e.target.innerText
    fetchAPI(searchStr)
  }

  this.setState = (nextState) => {
    this.state = nextState

    searchResult.setState(this.state.searchResultData)
    searchInput.setState(this.state.searchHistory)

    setBackUpSearchHistory(STORED_KEY, [...this.state.searchHistory])
  }

  const searchInput = new SearchInput({ targetDOM: this.$innerDOM, initData: this.state.searchHistory, onKeyupInput, onClickHistory })
  const searchResult = new SearchResult({ targetDOM: this.$innerDOM, initData: this.state.searchResultData })
}

export default App
