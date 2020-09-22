import { validateData } from './utils.js'

function SearchResult(data, $target) {
  if (this.constructor !== SearchResult) {
    throw new Error('SearchResult should be called by "new" keyword')
  }
  validateData(data)

  this.$target = document.querySelector($target)
  this.data = data

  this.render = function () {
    this.$target.innerHTML = `${this.data
      .map(
        (item) => `<li><img src="${item.imageUrl}" alt="${item.title}"></li>`
      )
      .join('')}`
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }
}

export default SearchResult
