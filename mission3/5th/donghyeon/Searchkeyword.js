import { debounce } from './debounce.js'

function SearchKeyword(target, { search }) {
  this.$target = document.querySelector(target)

  this.$target.addEventListener(
    'keyup',
    debounce(e => {
      search(e.target.value)
    })
  )
}

export default SearchKeyword
