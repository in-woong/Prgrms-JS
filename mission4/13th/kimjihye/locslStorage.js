export const getItem = (key, defaultValue) => {
  try {
    const storedValue = localStorage.getItem(key)

    return storedValue ? JSON.parse(storedValue) : defaultValue
  } catch {
    return defaultValue
  }
}

export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    alert('데이터 추가에 실패했습니다. 데이터 양을 확인해주세요')
  }
}

export default {
  getItem,
  setItem,
}
