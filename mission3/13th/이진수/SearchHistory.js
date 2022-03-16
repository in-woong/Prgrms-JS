function SearchHistory({ $target, initialState, onHistoryClick }) {
  this.state = initialState || []

  this.setState = (nextData = []) => {
    this.state = nextData
    this.render()
  }

  this.render = () => {
    const history = this.state
      .map((value) => {
        return `<span style="cursor: pointer;">${value}</span>`
      })
      .join('')

    $target.innerHTML = `${history}`
  }
  this.render()

  $target.addEventListener('click', (event) => {
    if (event.target.innerText) {
      onHistoryClick(event.target.innerText)
    }
  })
}

export default SearchHistory
