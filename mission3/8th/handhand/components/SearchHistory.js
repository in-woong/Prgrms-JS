function SearchHistory({ onClickHistory }) {
  this.$searchHistory = document.querySelector('#search-history')

  this.init = () => {
    this.$searchHistory.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        const keyword = event.target.innerHTML
        onClickHistory(keyword)
      }
    })
  }

  this.render = (histories) => {
    this.$searchHistory.innerHTML = `${histories
      .map((history) => `<li>${history}</li>`)
      .join('')}`
  }

  this.init()
}

export default SearchHistory
