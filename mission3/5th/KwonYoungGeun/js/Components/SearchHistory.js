import { $ } from '../utils/index.js'
import { validateElement } from '../validation/index.js'

function SearchHistory({ target, onSearch }) {
  this.init = () => {
    this.$element = $(target)
    this.keywordHistory = []

    this.validate(this.$element)
    this.bindEvents()
    this.render()
  }

  this.validate = $element => {
    validateElement($element)
  }

  this.bindEvents = () => {
    this.$element.addEventListener('click', this.onClick)
  }

  this.onClick = e => {
    if (e.target.className === 'keyword_item') {
      onSearch({ text: e.target.innerText })
    }
  }

  this.setState = value => {
    const result = this.keywordHistory.find(keyword => keyword === value)

    if (!result) {
      this.keywordHistory = [...this.keywordHistory, value]
      this.render()
    }
  }

  this.render = () => {
    this.$element.innerHTML = `<ul>${this.keywordHistory
      .map(keyword => `<li class="keyword_item">${keyword}</li>`)
      .join('')}</ul>`
  }

  this.init()
}

export default SearchHistory
