function SearchHistory(state, $searchHistoryEl, { searchByTerm }) {
  this.$searchHistoryEl = $searchHistoryEl
  this.state = state
  this.searchByTerm = searchByTerm

  this.setState = (state) => {
    this.state = state
    this.render()
  }

  this.render = () => {
    const htmlString = this.state
      .map((term) => {
        return `<li><a href="#">${term}</a></li>`
      })
      .join('')
    this.$searchHistoryEl.innerHTML = `<ul>${htmlString}</ul>`
  }

  this.$searchHistoryEl.addEventListener('click', (e) => {
    const selectedListItem = Array.from(
      e.currentTarget.querySelector('ul').children
    ).find((li) => li.contains(e.target))
    this.searchByTerm(selectedListItem.innerText)
  })
  this.render()
}

export default SearchHistory
