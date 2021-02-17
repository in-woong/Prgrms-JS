import { debounce } from './util.js'

export default function SearchInput({ $target, onSearch }) {
  const $searchInput = document.createElement('input')

  $searchInput.className = 'search-input'
  $searchInput.placeholder = '움짤 키워드를 검색해주세요 👀'

  $target.append($searchInput)

  this.target = $searchInput

  this.initEvent = () => {
    $target.addEventListener('submit', (e) => {
      e.preventDefault()
      debounce(async () => {
        if (this.target.value.length > 0) {
          onSearch(this.target.value)
          this.target.value = ''
        }
      }, 800)
    })
  }

  this.render = () => {}

  this.initEvent()
  this.render()
}
