class SearchResult {
  constructor(resultId, usePixa) {
    this.usePixa = usePixa
    this.$result = document.querySelector(resultId);
  }

  setState(data) {
    this.data = data;
    this.render();
  }
  
  render() {
    const htmlString = `${this.data.slice(0,3).map(
      d => `<img src="${this.usePixa ? d.webformatURL: d.imageUrl}">`
    ).join('')}`
    this.$result.innerHTML = htmlString
  }
}

export default SearchResult
