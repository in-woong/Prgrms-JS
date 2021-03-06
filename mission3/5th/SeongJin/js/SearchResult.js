export default function SearchResult(data, target) {
  this.data = data
  this.target = target

  this.setState = nextData => {
    this.data = nextData
    this.render()
  }

  this.render = () => {
    this.target.innerHTML = this.data
      .map(data => `<img src="${data.imageUrl}">`)
      .join('')
  }
}
