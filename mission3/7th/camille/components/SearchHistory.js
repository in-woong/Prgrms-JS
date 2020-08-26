function SearchHistory(onHistorySearch) {
  this.$input = document.querySelector('#area-input')
  this.$ul = document.createElement('UL')
  this.$input.appendChild(this.$ul)
  this.searchHistories = new Set()

  this.$ul.addEventListener('click', (e) => {
    if (e.target.tagName !== 'LI') {
      return
    }
    this.$ul.style.display = 'none'
    onHistorySearch(e.target.textContent)
  })
  this.setState = (keyword) => {
    if (!this.searchHistories.has(keyword)) {
      this.searchHistories.add(keyword)
    }
    this.render()
  }
  this.render = () => {
    this.$ul.style.display = 'block'
    const htmlString = `${Array.from(this.searchHistories)
      .map((historyData) => `<li>${historyData}</li>`)
      .join('')}`
    this.$ul.innerHTML = htmlString
  }
}

export default SearchHistory
