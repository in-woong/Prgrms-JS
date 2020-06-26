export default function SearchResult({$target, data}) {
  this.data = data

  this.render = () => {
    const htmlString = `${this.data
      .map(d => `<img src="${d.imageUrl}">`)
      .join('')}`
      
    $target.innerHTML = htmlString
  }

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.render()
}
