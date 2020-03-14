const ENTER = 'Enter'
function SearchInput($target, { onSearch }) {
  this.$target = $target
  this.onSearch = onSearch
  this.render = () => {
    $target.innerHTML = `<input ></input><button>검색</button>`
    this.$input = $target.querySelector('input')
    this.$button = $target.querySelector('button')

    this.$input.addEventListener('keyup', e => {
      if (!e.target.value) return
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        this.onSearch(e.target.value)
        // FIXME: 마지막 글자가 안지워짐
        e.target.value = ''
      }, 500)
    })
    this.$button.addEventListener('click', e => {
      if (!this.$input.value) return
      this.onSearch(this.$input.value)
      this.$input.value = ''
    })
  }
  this.render()
}
