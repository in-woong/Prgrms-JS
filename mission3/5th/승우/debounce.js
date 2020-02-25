//래퍼런스 : https://github.com/learn-programmers/prgrms-fejs/pull/183
// let timer = null

function debounce(callback, time) {
  if (timer) clearTimeout(timer)

  timer = setTimeout(callback, time)
}
