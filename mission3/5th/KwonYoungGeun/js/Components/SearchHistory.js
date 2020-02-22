import { $ } from '../utils/index.js'
import { validateElement } from '../validation/index.js'

function SearchHistory({ target, requestData }) {
  this.init = () => {
    this.$element = $(target)
    this.keywordHistory = ['고양이']

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

  /**
   * TODO: 유효성 검증 추가하기
   */
  this.onClick = e => {
    requestData(e.target.innerText)
  }

  this.setState = value => {
    const result = this.keywordHistory.find(keyword => keyword === value)

    if (!result) {
      this.keywordHistory = [...this.keywordHistory, value]
      this.render()
      return
    }
  }

  this.render = () => {
    this.$element.innerHTML = `<ul>${this.keywordHistory
      .map(keyword => {
        return `<li>${keyword}</li>`
      })
      .join('')}</ul>`
  }

  this.init()
}

export default SearchHistory
