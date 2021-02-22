
class SearchHistory {
  constructor(selector, state , onSearchHandler) {
    this.target = document.querySelector(selector)
    this.state = state;
   
    this.onSearchHandler = onSearchHandler

    this.render()
    this.addEvent()
  }

  validation = () => {}

  setState = (newState) => {
    if (!newState) return;
    this.state = newState;
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
