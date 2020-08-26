export default class SearchResult {
  constructor(data, target) {
    this.data = data
    this.searchResult = document.querySelector(target)

    this.render()
  }

  setState(data) {
    this.data = data
    this.render()
  }

  render() {
    this.searchResult.innerHTML = this.data
      .map((datum) => `<img src="${datum.imageUrl}">`)
      .join('')
  }
}
