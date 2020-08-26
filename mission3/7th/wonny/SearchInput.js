export default function SearchInput(target, searchKeyword) {
  this.$target = target
  this.searchKeyword = searchKeyword
  this.timer

  this.render = () => {
    const $input = document.createElement('input')
    $input.addEventListener('keyup', (event) => {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      this.timer = setTimeout(() => {
        const keyword = event.target.value
        if (keyword.trim() === '') {
          return
        }

        this.searchKeyword(keyword, true)
      }, 500)
    })
    this.$target.appendChild($input)
  }

  this.render()
}
