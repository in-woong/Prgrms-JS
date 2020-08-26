// 참고 https://davidwalsh.name/javascript-debounce-function
const debounce = (func, time) => {
  let timeout
  return (...args) => {
    const runFunc = () => {
      timeout = null
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(runFunc, time)
  }
}

export { debounce }
