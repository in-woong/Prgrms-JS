export const debounce = (func, delay) => {
  let timer = null
  return (...args) => {
    // arguments를 받아오지 않으면 이벤트의 value를 가져오지 못한다.
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
