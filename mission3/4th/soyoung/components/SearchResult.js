import { checkElement, checkArray, ERROR_MSG } from '../utils.js'

export default function SearchResult({ $target, resultData = [] }) {
  if (!checkElement($target)) throw new Error(ERROR_MSG.ELEMENT)
  if (!checkArray(resultData)) throw new Error(ERROR_MSG.ARRAY)
  this.$target = $target
  this.resultData = resultData

  this.setState = nextData => {
    if (!checkArray(nextData)) throw new Error(ERROR_MSG.ARRAY)
    this.resultData = nextData
    this.render()
  }
  this.render = () => {
    this.$target.innerHTML = `${this.resultData
      .map(
        ({ imageUrl, title }) =>
          `<div class="result__item">
            <img class="result__img" src="${imageUrl}" alt="${title}">
          </div>`
      )
      .join('')}`
  }

  this.render()
}
