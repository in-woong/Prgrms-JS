import debounce from './debounce.js'

export default function SearchInput({ $target, initialState, onSearch }) {
  this.state = initialState
  this.$input = document.createElement('input')
  this.$input.placeholder = '검색어를 입력하세요'

  $target.appendChild(this.$input)

  this.setState = (nextState) => {
    if (typeof nextState === 'string' && nextState.length > 0) {
      this.state = nextState
      this.render()
    }
  }

  this.render = () => {
    this.$input.value = this.state
  }

  this.$input.addEventListener('keyup', (e) => {
    const { value } = e.target
    if (value.length > 0) {
      debounce(() => onSearch(value), 500)
    }
  })
  this.render()
}
