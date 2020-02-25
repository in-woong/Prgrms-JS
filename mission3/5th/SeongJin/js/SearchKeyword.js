import { debounce } from './util.js'

export default function SearchKeyword(search) {
  this.search = search
  this.$input = document.querySelector('#search-keyword')

  this.render = () => {
    this.$input.addEventListener(
      'keyup',
      debounce(e => this.search(e), 1000)
    )
  }

  this.render()
}
