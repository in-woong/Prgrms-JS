class SearchHistory {
  constructor({ $app, initialState = [] }) {
    this.state = initialState
    this.$target = document.createElement('div')
    this.$target.className = 'search-histroy'
    $app.append(this.$target)
  }

  render = () => {
    this.$target.innerHTML = this.state.map((text) => `<input type="button" value=${text}>`).join('')
  }

  setState = (nextState) => {
    this.state = nextState
    this.render()
  }
}

export default SearchHistory
