//SearchResult.js

function SearchResult(data, $selector) {
  validateData(data)
  validateSelector($selector)

  this.data = data
  this.$target = document.querySelector($selector)

  this.render = () => {
    this.$target.innerHTML = this.data
      .map(d => {
        return `<img src="${d.imageUrl}">`
      })
      .join('')
  }

  this.setState = newData => {
    this.data = newData
    this.render()
  }
}
