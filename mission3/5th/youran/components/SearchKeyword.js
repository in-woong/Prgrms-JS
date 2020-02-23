function SearchKeyword(target, { onKeyUp }) {
  this.$searchKeyword = document.querySelector(target)
  this.onKeyUp = debounce(event => onKeyUp(event.target.value), 300)
  let timer = null
  this.$searchKeyword.addEventListener('keyup', event => {
    this.onKeyUp(event)
  })
}

const debounce = (targetFunction, waitTime) => {
  let timer = null
  return (...args) => {
    const debouncedFunction = () => {
      clearTimeout(timer)
      return targetFunction.apply(this, args)
    }
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(debouncedFunction, waitTime)
  }
}
