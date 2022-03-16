export const getStorage = (key, defaultData) => {
  const jsonData = window.localStorage.getItem(key)
  try {
    if (jsonData) {
      return JSON.parse(jsonData)
    }
    return defaultData
  } catch (err) {
    return defaultData
  }
}

export const setStorage = (key, newState) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(newState))
  } catch (err) {
    alert('용량을 초과했습니다.')
    console.error(err)
  }
}

export const clearStorage = () => {
  try {
    window.localStorage.clear()
  } catch (err) {
    alert('할 일 목록을 제거하지 못했습니다.')
    console.error(err)
  }
}
