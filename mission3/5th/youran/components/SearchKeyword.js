import { debounce } from '../util.js'

export default function SearchKeyword(currentKeyword, target, { onKeyUp }) {
  if (typeof currentKeyword !== 'string') {
    throw new Error('올바른 데이터 형식이 아닙니다.')
  }
  this.currentKeyword = currentKeyword
  this.$searchKeyword = document.querySelector(target)
  this.onKeyUp = debounce(event => onKeyUp(event.target.value), 1000)
  this.render = () => (this.$searchKeyword.value = this.currentKeyword)

  this.$searchKeyword.addEventListener('keyup', this.onKeyUp)
  this.setState = newKeyword => {
    this.currentKeyword = newKeyword
    this.render()
  }
}
