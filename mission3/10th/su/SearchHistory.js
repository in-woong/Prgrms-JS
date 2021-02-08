const SEARCH_HISTORY_STROAGE_NAME = 'SearchHistory'

class SearchHistory {
  constructor(selector, onSearchHandler) {
    this.target = document.querySelector(selector)
    try {
      this.state = JSON.parse(window.localStorage.getItem(SEARCH_HISTORY_STROAGE_NAME)) || []
    } catch (error) {
      this.state = []
      console.log(error)
    }

    this.onSearchHandler = onSearchHandler

    this.render()
    this.addEvent()
  }

  validation = () => {}

  setState = (newState) => {
    if (!newState) return
    if (this.state.includes(newState)) return
    const addedStated = [...this.state, newState]
    this.state = addedStated
    try {
      window.localStorage.setItem(SEARCH_HISTORY_STROAGE_NAME, JSON.stringify(addedStated))
    } catch (error) {
      console.log(error)
    }
    this.render()
  }

  addEvent = () => {
    this.target.addEventListener('click', (e) => {
      if (e.target.className === 'search-history-item') {
        this.onSearchHandler(e.target.innerText)
      }
    })
  }

  render = () => {
    const historyElemString = this.state.map((item) => `<button class="search-history-item">${item}</button>`).join('')
    this.target.innerHTML = historyElemString
  }
}

export default SearchHistory
