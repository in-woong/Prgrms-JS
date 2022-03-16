import { $ } from '../util/helper.js'

class SearchHistory {
  constructor({ $target, initialState }) {
    this.$target = $($target)
    this.state = initialState
    this.setEvent()
    this.render()
  }

  setState(nextState) {
    this.state = nextState
    this.render()
  }

  setEvent() {
    this.$target.addEventListener('click', (e) => {
      this.state
        .filter((item) => item.id == e.target.dataset.id)
        .map((item) => ($('#search-keyword').value = item.text))
    })
  }

  render() {
    this.$target.innerHTML = `
      ${this.state
        .map((item) => `<li data-id="${item.id}">${item.text}</li>`)
        .join('')}
    `
  }
}

export default SearchHistory
