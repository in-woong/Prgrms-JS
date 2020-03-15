const ENTER = 'Enter'
function SearchInput($target, { onSearch, onSearchPreview }) {
  this.$target = $target
  this.onSearch = onSearch
  this.onSearchPreview = onSearchPreview
  this.render = () => {
    $target.innerHTML = `<input ></input><button>검색</button>`
    this.$input = $target.querySelector('input')
    this.$button = $target.querySelector('button')

    this.$input.addEventListener('keyup', e => {
      if (!e.target.value) return
      if (e.key === ENTER) {
        this.onSearch(e.target.value)
        this.$input.value = ''
        this.$input.focus()
        return
      }
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        this.onSearchPreview(e.target.value)
      }, 500)
    })
    this.$button.addEventListener('click', e => {
      if (!this.$input.value) return
      this.onSearch(this.$input.value)
      this.$input.value = ''
      this.$input.focus()
    })
  }
  this.render()
}
