import { ERROR_MSG } from './common/ERROR_MSG.js'
import { isNew } from './common/validateData.js'
import { getBackUpTodo, setBackUpTodo } from './common/util.js'

import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'

const STORED_KEY = 'searchHistory'

function App($appDOM) {
  if (isNew(new.target)) {
    this.searchData = []
    this.searchHistory = getBackUpTodo(STORED_KEY, new Set())
    this.timer = ''

    this.$appDOM = $appDOM

    this.$innerDOM = document.createElement('div')
    this.$innerDOM.className = 'inner'
    this.$innerDOM.innerHTML = `<h1>움짤 검색기</h1>`

    this.$appDOM.appendChild(this.$innerDOM)
  }

  // API 호출 및 검색어 히스토리 저장
  const getImage = async (url, searchStr) => {
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
  const onSearchInput = (e) => {
    // input 검색어가 없는 경우
    if (!e.target.value) {
      clearTimeout(this.timer)
      this.setState([])
      return
    }

    const searchStr = e.target.value
    const url = `https://jjalbot.com/api/jjals?text=${searchStr}`

    // Enter 입력시 바로 검색
    if (e.key === 'Enter') {
      clearTimeout(this.timer)
      getImage(url, searchStr)
      return
    }

    // 디바운스 처리
    if (this.timer) {
      clearTimeout(this.timer)
    }

    // 1초 후 검색 세팅
    this.timer = setTimeout(() => {
      getImage(url, searchStr)
    }, 1000)
  }

  // history 클릭시 검색
  const onHistory = (e) => {
    const searchStr = e.target.innerText
    document.querySelector('#search-input').value = searchStr

    getImage(`https://jjalbot.com/api/jjals?text=${searchStr}`, searchStr)
  }

  this.setState = (newState, searchStr) => {
    this.searchData = newState
    this.searchResult.setState(this.searchData)

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

  this.searchInput = new SearchInput({ targetDOM: this.$innerDOM, initData: this.searchHistory, onSearchInput, onHistory })
  this.searchResult = new SearchResult({ targetDOM: this.$innerDOM, initData: this.searchData })
}

export default App
