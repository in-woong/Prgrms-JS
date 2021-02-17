// import { ERROR_MSG } from './common/ERROR_MSG.js'

const getBackUpTodo = (key, defaultValue) => {
  try {
    const storedValue = window.localStorage.getItem(key)

    return storedValue ? new Set(JSON.parse(storedValue)) : defaultValue
  } catch {
    return defaultValue
  }
}

const setBackUpTodo = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e.message)
  }
}

// API 호출 및 검색어 히스토리 저장
const getImage = async (searchStr) => {
  const url = `https://jjalbot.com/api/jjals?text=${searchStr}`
  const response = await fetch(url)

  if (response.ok) {
    try {
      return await response.json()
    } catch (e) {
      // throw new Error(ERROR_MSG.JSON_PARSE_ERROR)
      return []
    }
  } else {
    throw new Error(ERROR_MSG.NETWORK_NOT_OK)
  }
}

const isExceptionKey = (key) => {
  return ['CapsLock', 'Shift', 'Control', 'Meta', 'Alt', 'Home', 'End', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'HangulMode', 'Escape'].indexOf(key) === -1 ? false : true
}

export { getBackUpTodo, setBackUpTodo, getImage, isExceptionKey }
