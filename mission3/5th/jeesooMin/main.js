import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'
import api from './api.js'

function Main() {
  this.data = null

  this.init = () => {
    try {
      this.searchInput = new SearchInput({
        $target: document.querySelector('#search-keyword'),
        onKeyUp: this.handleKeyUp,
      })

      this.searchResult = new SearchResult(
        this.data,
        document.querySelector('#search-result')
      )
    } catch (e) {
      console.log(e)
    }
  }

  this.setState = newData => {
    this.searchResult.setState(newData)
    this.data = newData
  }

  this.handleKeyUp = async value => {
    if (!value) {
      return
    }

    try {
      const res = await api.getJjalAPI(value)
      if (res.status !== 200) {
        throw new Error('[Main] API를 확인해주세요.')
      }

      this.setState(await res.json())
    } catch (e) {
      console.log(e)
    }
  }

  this.init()
}

export default Main
