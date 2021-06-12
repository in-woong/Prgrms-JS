import { $ } from './utils.js'

export default class SearchResult {
  constructor(data, target) {
    this.state = data
    this.target = target
  }

  render(receivedData) {
    this.state = receivedData
    const resultDiv = $(this.target)
    if (!this.state.length) resultDiv.innerHTML = ''
    else resultDiv.innerHTML = `${this.state.map((image) => `<img src="${image.imageUrl}">`).join('')}`
  }

  setState(receivedData) {
    this.render(receivedData)
  }
}
