const ENTER = 'Enter'
function SearchInput($target, { onSearch }) {
  this.$target = $target
  this.onSearch = onSearch
  this.render = () => {
    $target.innerHTML = `<input></input><button>검색</button>`
    this.$input = $target.querySelector('input')
    this.$button = $target.querySelector('button')

    this.$input.addEventListener('keydown', e => {
      if (e.key === ENTER) {
        this.onSearch(e.target.value)
      }
    })
    this.$button.addEventListener('click', e => {
      this.onSearch(this.$input.value)
    })
  }
  this.render()
}
