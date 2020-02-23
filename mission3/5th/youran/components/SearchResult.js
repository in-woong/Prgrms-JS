import { ERROR_MESSAGE } from '../constant.js'
import { isArray } from '../util.js'

export default function SearchResult({ resultData, target }) {
  if (!isArray(resultData)) {
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
    if (!isArray(newData)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR)
    }
    this.data = newData
    this.render()
  }

  this.render()
}
