function SearchResult({ initialState, $target}) {
  this.data = initialState

  this.setState = nextData => {
    this.data = nextData
    this.render()
  }

  this.render = () => {
    $target.innerHTML = this.data.map(d => `<img src="${d.imageUrl}">`).join('')
  }

  this.render()
}
