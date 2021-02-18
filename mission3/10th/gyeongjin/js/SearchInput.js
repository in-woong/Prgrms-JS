import { debounce } from './util.js'

export default function SearchInput({ $target, onSearch }) {
  const $searchInput = document.createElement('input')

  $searchInput.className = 'search-input'
  $searchInput.placeholder = '움짤 키워드를 검색해주세요 👀'

  $target.append($searchInput)

  this.target = $searchInput

  this.initEvent = () => {
    $target.addEventListener('keyup', (e) => {
      e.preventDefault()
      debounce(async () => {
        if (this.target.value.length > 0) {
          onSearch(this.target.value)

          // review5 - onSearch를 한 뒤 값을 초기화시켜도 한글의 경우 compositionend가 되지 않았기 때문에, 마지막 글자가 남아있는 현상 개선
          this.target.blur()
          this.target.value = ''
          this.target.focus()
        }
      }, 800)
    })
  }

  this.render = () => {}

  this.initEvent()
  this.render()
}
