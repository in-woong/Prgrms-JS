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
    alert('데이터 추가에 실패했습니다. 너무 데이터가 많아서 그럴 수 있어요.')
  }
}


export default {
  getItem,
  setItem
}