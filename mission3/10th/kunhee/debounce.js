let timer = null;
const debounce = (func, wait) => {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(func, wait)
}
export default debounce;