import { $ } from './utils.js'

export default class SearchInput {
  constructor(showResult) {
    this.input = $('#search-keyword')
    this.input.addEventListener('keyup', this.setInput.bind(this))
    this.showResult = showResult
  }

  async setInput(e) {
    if (e.code === 'Enter') {
      const receivedData = await this.getInputValue(this.input.value)
      this.showResult(receivedData)
    }
  }

  getInputValue(inputValue) {
    return fetch(`https://jjalbot.com/api/jjals?text=${inputValue}`)
      .then((x) => {return x.json()})
  }
}
