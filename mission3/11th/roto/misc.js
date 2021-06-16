let timer = null

export const debounce = (fn, delay = 500) => {
  if (!timer) {
    timer = setTimeout(() => {
      timer = null;
      fn()
    }, delay);
  }
}