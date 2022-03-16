export default function SearchHistory({ $target, initialState, handleSearch }) {
  this.state = initialState
  const searchHistory = document.createElement('div')
  $target.appendChild(searchHistory)
  this.render = function () {
    searchHistory.innerHTML = `${this.state
      .map((item, index) => `<div data-id=${index}>${item}</div>`)
      .join('')}`
  }

  searchHistory.addEventListener('click', (e) => {
    const index = e.target.closest('div').dataset.id
    handleSearch(this.state[index])
  })

  SearchHistory.prototype.setState = (nextState) => {
    this.state = nextState
    this.render()
  }
  this.render()
}
