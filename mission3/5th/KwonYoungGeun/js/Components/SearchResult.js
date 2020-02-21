import { $ } from '../utils/index.js'
import { validateElement } from '../validation/index.js'

function SearchResult(data, target) {
  this.init = () => {
    this.$element = $(target)
    this.data = data || []

    this.validate(this.$element)
    this.render()
  }

  this.validate = $element => {
    validateElement($element)
  }

  this.setState = data => {
    this.data = data
    this.render()
  }

  this.render = () => {
    this.$element.innerHTML = this.data
      .map(data => {
        return `<img src="${data.imageUrl}"></img>`
      })
      .join('')
  }

  this.init()
}

export default SearchResult
