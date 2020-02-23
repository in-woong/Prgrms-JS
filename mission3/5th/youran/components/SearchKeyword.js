function SearchKeyword(target, { onKeyUp }) {
  this.$searchKeyword = document.querySelector(target)
  this.onKeyUp = onKeyUp
  this.$searchKeyword.addEventListener('keyup', event => {
    this.onKeyUp(event.target.value)
  })
}
