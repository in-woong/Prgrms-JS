import { validateData } from './utils.js'

function SearchResult(data, $target) {
  if (this.constructor !== SearchResult) {
    throw new Error('SearchResult should be called by "new" keyword')
  }
  validateData(data)

  this.$target = $target
  this.data = data

  this.render = function () {
    document.querySelector(this.$target).innerHTML = `${this.data
      .map((item) => `<li><img src="${item.imageUrl}"></li>`)
      .join('')}`
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }
}

export default SearchResult