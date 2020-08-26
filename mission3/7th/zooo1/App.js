import SearchResult from './searchResult.js'
import SearchHistory from './searchHistory.js'

export default class App {
  constructor() {
    this.searchInput = document.querySelector('#search-keyword')
    this.searchHistory = new SearchHistory('#search-histroy')
  }
  render() {
    this.searchHistory.render(this)
    this.timer
    this.searchInput.addEventListener('keyup', (e) => {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        if (e.target.value.trim() === '') {
          return
        }
        this.getJjalData(e.target.value)
        this.searchHistory.addHistroyData(e.target.value)
      }, 750)
    })
  }

  async getJjalData(keyword) {
    const res = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
    const jsonRes = await res.json()
    const data = await JSON.parse(JSON.stringify(jsonRes, null, 2))
    new SearchResult(data, '#search-result').render()
  }
}
