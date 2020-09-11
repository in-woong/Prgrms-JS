let timer

export const debounce = (fn, second) => {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => fn(), second)
}
