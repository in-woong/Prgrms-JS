import { debounce } from '../utils/debounce.js'
import { validateInstance } from '../utils/validation.js'

const MAX_HISTORY_SIZE = 5

function SearchInput({ $target, handleSearch }) {
  if (validateInstance(this, SearchInput)) return

  this.$searchInput = document.createElement('input')
  this.$searchInput.placeholder = '검색어를 입력하세요'
  $target.appendChild(this.$searchInput)

  // 다른 컴포넌트들과의 인터페이스를 맞추기 위한 render()
  this.render = () => {}

  this.setEvent = () => {
    this.$searchInput.addEventListener(
      'keyup',
      // debounce 적용
      debounce((e) => {
        if (e.target.value != '') {
          handleSearch(e.target.value)
        }
      }, 1000)
    )
  }

  this.render()
  this.setEvent()
}

export default SearchInput
