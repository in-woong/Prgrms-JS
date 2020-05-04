//래퍼런스 : https://joshua1988.github.io/web_dev/javascript-interview-3questions/#%EC%A7%88%EB%AC%B8-3--%EB%94%94%EB%B0%94%EC%9A%B4%EC%8B%B1-debouncing
function debounce(fn, delay) {
  let timer = null
  return function() {
    let context = this
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(context, args)
    }, delay)
  }
}
