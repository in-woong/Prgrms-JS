let timer
export function debounce({ time, callBackFunc }) {
  if (timer) clearTimeout(timer)
  timer = setTimeout(callBackFunc, time)
}
