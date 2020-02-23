function SearchResult(data, target) {
  this.data = data
  this.$searchResult = document.querySelector(target)

  this.render = () => {
    this.$searchResult.innerHTML = this.data
      .map(item => `<img src=${item.imageUrl} alt=${item.title}>`)
      .join('')
  }

  this.setState = newData => {
    this.data = newData
    this.render()
  }

  this.render()
}
