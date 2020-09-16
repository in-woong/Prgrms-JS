export default function SearchResult({ $app, initialData }) {
  const $searchResult = document.createElement('div')
  $searchResult.className = 'search-result'

  $app.appendChild($searchResult)

  this.$target = $searchResult
  this.data = initialData

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.render = () => {
    if (this.data) {
      const htmlString = `${this.data
        .map((d) => `<img src="${d.imageUrl}">`)
        .join('')}`
      this.$target.innerHTML = htmlString
    } else {
      this.$target.innerHTML = ''
    }
  }
  this.render()
}
