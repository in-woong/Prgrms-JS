// event debounce 기법 적용
export function applyEventDebounce(callBack, timer, delayMs) {
  if (timer) {
    clearTimeout(timer)
  }
  return setTimeout(callBack, delayMs)
}
