import { checkElement, checkArray, ERROR_MSG } from '../utils.js'

export default function SearchHistory({
  $target,
  historyList = [],
  onclickHistory,
}) {
  if (!checkElement($target)) throw new Error(ERROR_MSG.ELEMENT)
  if (!checkArray(historyList)) throw new Error(ERROR_MSG.ARRAY)
  this.$target = $target
  this.historyList = historyList
  this.$target.addEventListener('click', ({ target }) => {
    if (target.className === 'history__item') {
      onclickHistory(target.dataset.value)
    }
  })

  this.setState = newList => {
    if (!checkArray(newList)) throw new Error(ERROR_MSG.ARRAY)
    this.historyList = newList
    this.render()
  }

  this.render = () => {
    if (this.historyList.length > 0) {
      this.$target.innerHTML = `검색내역: ${this.historyList
        .map(
          item =>
            `<span class="history__item" data-value="${item}">${item}</span>`
        )
        .join('')}`
    }
  }

  this.render()
}
