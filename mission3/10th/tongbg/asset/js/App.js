import { ERROR_MSG } from './common/ERROR_MSG.js'

import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'

function App($appDOM) {
  this.searchData = []
  this.timer = ''

  this.$appDOM = $appDOM

  this.$innerDOM = document.createElement('div')
  this.$innerDOM.className = 'inner'
  this.$innerDOM.innerHTML = `<h1>움짤 검색기</h1>`

  this.$appDOM.appendChild(this.$innerDOM)

  const getImage = async (url, searchStr) => {
    const response = await fetch(url)

    if (response.ok) {
      try {
        const jsonData = await response.json()
        this.setState(jsonData)
        this.searchInput.setState(searchStr)
      } catch {
        this.setState([])
      }
    } else {
      throw new Error(ERROR_MSG.NETWORK_NOT_OK)
    }
  }

  const onSearchInput = (e) => {
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

    // 디바운스 처리 - 1초 후 검색 세팅
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

  this.setState = (newState) => {
    this.searchData = newState
    this.searchResult.setState(this.searchData)
  }

  this.searchInput = new SearchInput({ targetDOM: this.$innerDOM, onSearchInput, onHistory })
  this.searchResult = new SearchResult({ targetDOM: this.$innerDOM, initData: this.searchData })
}

export default App
