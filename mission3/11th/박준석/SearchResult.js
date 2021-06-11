import { $ } from './utils.js'

export default class SearchResult {
  constructor(data, target) {
    this.state = data;
    this.target = target;
  }

  render(receivedData) {
    this.state = receivedData;
    const resultDiv = $(this.target);
    resultDiv.innerHTML = `${this.state.map((d) => `<img src="${d.imageUrl}">`).join('')}`
  }
  setState(receivedData) {
    this.render(receivedData)
  }
}
