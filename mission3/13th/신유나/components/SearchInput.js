import { debounce } from '../utils/debounce.js'

export default function SearchInput({ $target, searchTerm, onSearch }) {
  this.state = searchTerm

  this.$input = document.createElement('input')
  this.$input.id = 'search-keyword'
  this.$input.setAttribute('type', 'search')
  this.$input.setAttribute('placeholder', '검색할 움짤 키워드를 입력하세요 :)')

  $target.appendChild(this.$input)

  const keyUpEvent = async (e) => {
    const value = this.$input.value.trim()

    if (e.key !== 'Enter') {
      return
    }
    if (!value) {
      return
    }

    await onSearch(value)
  }

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.setEvent = () => {
    this.$input.addEventListener('keypress', debounce(keyUpEvent, 300))
  }

  this.render = () => {
    if (this.state) {
      this.$input.value = this.state
    }
    this.$input.focus()
  }

  this.render()
  this.setEvent()
}
