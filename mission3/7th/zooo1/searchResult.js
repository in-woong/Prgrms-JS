export default class SearchResult {
  constructor(data, target) {
    this.data = data
    this.target = document.querySelector(target)
  }
  render() {
    const htmlString = `${this.data
      .map((d) => `<img src="${d.imageUrl}">`)
      .join('')}`
    this.target.innerHTML = htmlString
  }
}
