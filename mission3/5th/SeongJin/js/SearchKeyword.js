import { debounce } from './util.js'

export default function SearchKeyword(onSearchKeyword) {
  this.onSearchKeyword = onSearchKeyword
  this.$input = document.querySelector('#search-keyword')

  this.render = () => {
    this.$input.addEventListener('keyup', debounce(this.onSearchKeyword, 1000))
  }

  this.render()
}
