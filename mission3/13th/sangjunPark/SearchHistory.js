const SearchHistory = function ({ initialState, $target }) {
  this.state = initialState
  this.$target = $target

  this.render = () => {
    this.$target.innerHTML = this.state
      .map((data) => `<li>${data}</li>`)
      .join('')
  }

  this.addValue = (value) => {
    if (!this.state.includes(value) && value.length) this.state.push(value)
    this.render()
  }
}

export default SearchHistory
