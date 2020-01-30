export default class SearchResult {
  constructor($target, data) {
    this.$resultArea = $target
    this.data = data
  }

  setState(nextData) {
    this.data = nextData
    this.render()
  }

  render() {
    this.$resultArea.innerHTML = this.data
      .map(item => `<img src="${item.imageUrl}">`)
      .join('')
  }
}
