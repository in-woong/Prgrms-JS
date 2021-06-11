import { $ } from './utils.js'

export default class SearchInput {
  constructor(showResult) {
    this.input = $('#search-keyword')
    this.input.addEventListener('keyup', this.setInput.bind(this))
    this.showResult = showResult
  }

  async setInput(e) {
    if (e.code === 'Enter') {
      this.showResult(this.input.value)
    }
  }

}
