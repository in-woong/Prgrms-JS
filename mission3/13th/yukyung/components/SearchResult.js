import { $ } from '../util/helper.js'

class SearchResult {
  constructor({ $target, initialState }) {
    this.$target = $($target)
    this.state = initialState
    this.render()
  }

  setState(nextState) {
    this.state = nextState
    this.render()
  }

  render() {
    this.$target.innerHTML = `
      ${this.state
        .map((item) => `<img src="${item.imageUrl}" alt="${item.title}" />`)
        .join('')}
    `
  }
}

export default SearchResult
