export const debounce = ({ wait, callback }) => {
  let timer

  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(callback, wait)
  }
}
