import { debounce } from '../util.js'
import { ERROR_MESSAGE } from '../constant.js'

export default function SearchKeyword({ keywordString, target, onKeyUp }) {
  if (typeof keywordString !== 'string') {
    throw new Error(ERROR_MESSAGE.TYPE_ERROR)
  }
  this.keywordString = keywordString
  this.$searchKeyword = document.querySelector(target)
  this.onKeyUp = debounce(event => onKeyUp(event.target.value), 1000)
  this.render = () => (this.$searchKeyword.value = this.keywordString)

  this.$searchKeyword.addEventListener('keyup', this.onKeyUp)
  this.setState = newKeyword => {
    this.keywordString = newKeyword
    this.render()
  }
}
