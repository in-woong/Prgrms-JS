function SearchResult(data, target) {
  if (this.constructor !== SearchResult) {
    throw new Error('SearchResult should be called by "new" keyword')
  }
  validateData(data)

  this.target = target
  this.data = data

  this.render = function () {
    document.querySelector(this.target).innerHTML = `${this.data
      .map((item) => `<img src="${item.imageUrl}">`)
      .join('')}`
  }

  this.setState = function () {
    this.data = data
    this.render()
  }
}
