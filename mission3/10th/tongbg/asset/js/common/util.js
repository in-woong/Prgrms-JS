const getBackUpSearchHistory = (key, defaultValue) => {
  try {
    const storedValue = window.localStorage.getItem(key)

    return storedValue ? new Set(JSON.parse(storedValue)) : defaultValue
  } catch {
    return defaultValue
  }
}

const setBackUpSearchHistory = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e.message)
  }
}

const isExceptionKey = (key) => {
  return ['CapsLock', 'Shift', 'Control', 'Meta', 'Alt', 'Home', 'End', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'HangulMode', 'Escape'].indexOf(key) === -1 ? false : true
}

//디바운스 처리
function debounce(targetFunction, debounceTime) {
  if (this.timerId) {
    clearTimeout(this.timerId)
  }

  // 1초 후 검색 세팅
  this.timerId = setTimeout(() => {
    targetFunction(document.querySelector('#search-input').value.trim())
  }, debounceTime)
}

export { getBackUpSearchHistory, setBackUpSearchHistory, isExceptionKey, debounce }
