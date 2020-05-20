class SearchResult {
  constructor(data, $container) {
    this.data = data
    this.$container = $container
    this.render()
  }

  render = () => {
    const htmlString = this.data
      .map(({ imageUrl }) => `<img src="${imageUrl}"/>`)
      .join('')
    this.$container.innerHTML = htmlString
  }

  setState = (data) => {
    this.data = data
    this.render()
  }
}

export default SearchResult
