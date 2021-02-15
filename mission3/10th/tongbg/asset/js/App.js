import { ERROR_MSG } from './common/ERROR_MSG.js'

import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'

function App($appDOM) {
  this.searchData = []
  this.timer = ''

  this.$appDOM = $appDOM
  $appDOM.innerHTML = `<div>움짤 검색기</div>`

  const getImage = async (url) => {
    const response = await fetch(url)

    if (response.ok) {
      try {
        const jsonData = await response.json()
        this.setState(jsonData)
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

    const url = `https://jjalbot.com/api/jjals?text=${e.target.value}`

    console.log(this.timer)

    if (this.timer) {
      clearTimeout(this.timer)
    }

    this.timer = setTimeout(() => {
      getImage(url)
    }, 1000)
  }

  this.setState = (newState) => {
    this.searchData = newState
    this.searchResult.setState(this.searchData)
  }

  this.searchInput = new SearchInput({ $appDOM, onSearchInput })
  this.searchResult = new SearchResult({ $appDOM, initData: this.searchData })
}

export default App
