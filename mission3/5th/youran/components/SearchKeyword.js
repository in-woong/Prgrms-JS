import { debounce } from '../util.js'

export default function SearchKeyword(target, { onKeyUp }) {
  this.$searchKeyword = document.querySelector(target)
  this.onKeyUp = debounce(event => onKeyUp(event.target.value), 1000)
  this.$searchKeyword.addEventListener('keyup', this.onKeyUp)
}
