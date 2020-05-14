let timer = ''
const debounce = (callback, args, tick) => {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    callback(args)
  }, tick)
}

export default debounce
