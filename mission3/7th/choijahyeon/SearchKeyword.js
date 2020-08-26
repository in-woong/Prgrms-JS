import { debounce } from './utils.js'

function SearchKeyword(target, search) {
  this.$target = target
  this.$input = document.createElement('input')
  this.timer = null
  this.$input.addEventListener('keyup', (e) => {
    debounce(500, e.target.value, search)
  })
  this.render = function () {
    this.$target.appendChild(this.$input)
  }
  this.render()
}

export default SearchKeyword
