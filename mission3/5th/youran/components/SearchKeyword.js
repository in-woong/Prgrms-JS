function SearchKeyword(target, { onKeyUp }) {
  this.$searchKeyword = document.querySelector(target)
  this.onKeyUp = onKeyUp
  let timer = null
  this.$searchKeyword.addEventListener('keyup', event => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      console.log(`keyword:${event.target.value}`)
      this.onKeyUp(event.target.value)
    }, 300)
  })
}
