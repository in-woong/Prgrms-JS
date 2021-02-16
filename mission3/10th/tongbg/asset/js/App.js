import { ERROR_MSG } from './common/ERROR_MSG.js'
import { isNew } from './common/validateData.js'
import { getBackUpTodo, setBackUpTodo } from './common/util.js'

import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'

const STORED_KEY = 'searchHistory'

function App($appDOM) {
  if (isNew(new.target)) {
    this.searchResultData = []
    this.searchHistory = getBackUpTodo(STORED_KEY, new Set())
    this.timer = ''

    this.$appDOM = $appDOM

    this.$innerDOM = document.createElement('div')
    this.$innerDOM.className = 'inner'
    this.$innerDOM.innerHTML = `<h1>움짤 검색기</h1>`

    this.$appDOM.appendChild(this.$innerDOM)
  }

  // API 호출 및 검색어 히스토리 저장
  const getImage = async (searchStr) => {
    const url = `https://jjalbot.com/api/jjals?text=${searchStr}`
    const response = await fetch(url)

    if (response.ok) {
      try {
        const jsonData = await response.json()
        this.setState(jsonData, searchStr)
      } catch (e) {
        console.log(e.message)
        this.setState([])
      }
    } else {
      throw new Error(ERROR_MSG.NETWORK_NOT_OK)
    }
  }

  // input debounce
  const onKeyupInput = (e) => {
    // input 검색어가 없는 경우
    if (!e.target.value) {
      clearTimeout(this.timer)
      this.setState([])
      return
    }

    const searchStr = e.target.value.trim()

    // Enter 입력시 바로 검색
    if (e.key === 'Enter') {
      clearTimeout(this.timer)
      document.querySelector('#search-input').value = searchStr
      searchStr && getImage(searchStr)
      return
    }

    // 디바운스 처리
    if (this.timer) {
      clearTimeout(this.timer)
    }

    // 1초 후 검색 세팅
    this.timer = setTimeout(() => {
      searchStr && getImage(searchStr)
    }, 1000)
  }

  // history 클릭시 검색
  const onClickHistory = (e) => {
    const searchStr = e.target.innerText.trim()
    document.querySelector('#search-input').value = searchStr

    searchStr && getImage(searchStr)
  }

  this.setState = (newState, searchStr) => {
    this.searchResultData = newState
    this.searchResult.setState(this.searchResultData)

    // searchHistory 5개까지만, 가장 이전의 것 삭제
    if (searchStr !== undefined) {
      if (this.searchHistory.has(searchStr)) {
        this.searchHistory.delete(searchStr)
      } else if (this.searchHistory.size >= 5) {
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
