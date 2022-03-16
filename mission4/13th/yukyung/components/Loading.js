class Loading {
  constructor({ $target, initialState }) {
    this.$target = $target
    this.state = initialState
    this.render()
  }

  setState(nextState) {
    this.state = nextState
    this.render()
  }

  render() {
    this.$target.innerHTML = `
      <p>${this.state.isLoading ? '로딩중...' : '로딩완료!'} </p>
    `
  }
}

export default Loading
