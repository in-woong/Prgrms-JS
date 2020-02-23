import { ERROR_MESSAGE } from '../constant.js'

export default function SearchResult({ resultData, target }) {
  if (!Array.isArray(resultData)) {
    throw new Error(ERROR_MESSAGE.TYPE_ERROR)
  }

  this.data = resultData
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
