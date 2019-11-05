function SearchResult(data, target) {
  if (this.constructor !== SearchResult) {
    throw new Error('SearchResult should be called by "new" keyword')
  }

  validateData(data)

  this.target = target
  this.state = data

  this.setState = (data) => {
    this.state = data
    this.render()
  }

  this.render = () => {
    document.getElementById(this.target).innerHTML = `${this.state.map((d) => `<img src="${d.imageUrl}">`).join('')}`
  }
}
