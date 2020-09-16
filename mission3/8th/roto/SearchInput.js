import { debounce } from './utils.js'

export default function SearchInput({ $app, initialState, onSearch }) {
  const $searchInput = document.createElement('input')
  $searchInput.className = 'search-input'
  $app.appendChild($searchInput)

  this.$target = $searchInput
  this.data = initialState

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.initializeEvent = () => {
    this.$target.addEventListener('keyup', (e) =>
      debounce(async () => {
        const { value } = e.target
        if (value.length > 0) {
          onSearch(value)
        }
      }, 500)
    )
  }

  this.render = () => {}

  this.initializeEvent()
  this.render()
}
