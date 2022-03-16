import debounce from './debounce.js'

function SearchInput({ $target, initialState, onSearch }) {
  this.state = initialState
  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $target.value = this.state
  }
  this.render()

  $target.addEventListener('keyup', (event) => {
    debounce(() => onSearch(event.target.value), 500)
  })
}

export default SearchInput
