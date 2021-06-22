class Loader {
  constructor({ $app, initialState }) {
    this.state = initialState

    this.$target = document.createElement('div')
    this.$target.className = 'overlay'
    this.$target.innerHTML = `<span class="loader">로딩 중...</span>`

    this._render()
    $app.appendChild(this.$target)
  }

  setState(nextState) {
    this.state = nextState
    this._render()
  }

  _render() {
    this.state ? this.$target.classList.add('loading') : this.$target.classList.remove('loading')
  }
}

export default Loader
