class SearchHistory {
  constructor({ $app, initialState = [], getData }) {
    this.state = initialState
    this.getData = getData
    this.$target = document.createElement('div')
    this.$target.className = 'search-histroy'
    $app.append(this.$target)
    this.$target.addEventListener('click', this.onClickButton)
  }

  render = () => {
    this.$target.innerHTML = this.state.map((text) => `<input type="button" value=${text}>`).join('')
  }

  setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  onClickButton = ({ target }) => {
    if (!target.matches('input')) return
    this.getData(target.value)
  }
}

export default SearchHistory
