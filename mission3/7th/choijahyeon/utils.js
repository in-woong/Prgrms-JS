export const apiUrl = 'https://jjalbot.com/api/jjals'

let timer = null
export const debounce = (time, value, search) => {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    search(value)
    timer = null
  }, time)
}
