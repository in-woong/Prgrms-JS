export const getItem = ({ key, defaultValue }) => {
  try {
    const storedData = window.localStorage.getItem(key)

    return storedData ? JSON.parse(storedData) : defaultValue
  } catch (e) {
    alert('할 일 데이터를 가져오는 중에 오류가 발생했습니다!')
    console.error(e)
    return defaultValue
  }
}

export const setItem = ({ key, item }) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(item))
  } catch (e) {
    alert('할 일 데이터를 업데이트하는 중에 오류가 발생했습니다!')
    console.error(e)
  }
}
