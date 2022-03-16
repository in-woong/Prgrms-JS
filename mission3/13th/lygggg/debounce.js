export default function debounce(fn, ts) {
  let timer

  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, ts)
  }
}
