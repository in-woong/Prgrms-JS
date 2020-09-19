function SearchHistory({ $parent }) {
  this.histories = []
  this.$searchHistory = document.querySelector('#search-history')

  this.init = () => {
    this.$searchHistory.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        const keyword = event.target.innerHTML
        $parent.dispatchEvent(
          new CustomEvent('search-history', {
            detail: { keyword },
          })
        )
      }
    })
  }

  this.pushHistory = (newHistory) => {
    this.histories.push(newHistory)
    this.render()
  }

  this.render = () => {
    this.$searchHistory.innerHTML = `<ul>${this.histories
      .map((history) => `<li>${history}</li>`)
      .join('')}</ul>`
  }

  this.init()
}

export default SearchHistory
