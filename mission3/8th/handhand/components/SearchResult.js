function SearchResult({ data }) {
  this.data = data
  this.$searchResult = document.querySelector('#search-result')

  this.setState = (prevData) => {
    this.data = prevData
    this.render()
  }

  this.render = () => {
    const htmlString = `${this.data
      .map((d) => `<li><img src="${d.imageUrl}" alt="움짤"></li>`)
      .join('')}`
    this.$searchResult.innerHTML = htmlString
  }
}

export default SearchResult
