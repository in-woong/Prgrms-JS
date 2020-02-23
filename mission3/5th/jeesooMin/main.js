import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'

const JJAL_API = `https://jjalbot.com/api/jjals`

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

  this.handleKeyUp = value => {
    if (!value) {
      return
    }

    fetch(`${JJAL_API}?text=${value}`)
      .then(x => x.json())
      .then(data => {
        this.setState(data)
      })
  }

  this.init()
}

export default Main
