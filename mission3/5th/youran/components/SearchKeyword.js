import { debounce, isString, isValidtarget } from '../util.js'
import { ERROR_MESSAGE } from '../constant.js'

export default function SearchKeyword({ keywordString, target, onSearch }) {
  if (!isString(keywordString)) {
    throw new Error(ERROR_MESSAGE.TYPE_ERROR)
  }
  if (!isValidtarget(target)) {
    throw new Error(ERROR_MESSAGE.ELEMENT_ERROR)
  }
  this.keywordString = keywordString
  this.$searchKeyword = document.querySelector(target)
  this.onSearch = debounce(event => onSearch(event.target.value), 1000)
  this.render = () => {
    this.$searchKeyword.value = this.keywordString
  }

  this.$searchKeyword.addEventListener('keyup', this.onSearch)
  this.setState = newKeyword => {
    if (!isString(newKeyword)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR)
    }
    this.keywordString = newKeyword
    this.render()
  }
}
