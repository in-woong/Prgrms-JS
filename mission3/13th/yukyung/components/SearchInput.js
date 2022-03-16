import { $ } from '../util/helper.js'

class SearchInput {
  constructor({ $target, onSearch }) {
    this.$target = $($target)
    this.onSearch = onSearch
    this.setEvent()
  }

  setEvent() {
    let timer
    this.$target.addEventListener('keyup', (e) => {
      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        this.onSearch(e.target.value)
      }, 200)
    })
  }
}

export default SearchInput
