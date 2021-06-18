import { $ } from './utils.js'

export default class SearchResult {
  constructor(data, target) {
    this.state = data
    this.target = target
  }

  render(receivedData) {
    this.state = receivedData
    const resultDiv = $(this.target)
    if (!this.state.length) resultDiv.innerHTML = '검색어에 대한 적절한 검색 결과가 존재하지 않습니다!'
    else resultDiv.innerHTML = `${this.state.map((image) => makeImgTag(image.imageUrl)).join('')}`
  }

  setState(receivedData) {
    this.render(receivedData)
  }
}

const makeImgTag = (imageUrl) => {
  return `<li style="list-style:none"><img src="${imageUrl}"></li>`
}
