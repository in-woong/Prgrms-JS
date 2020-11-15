export const getDataFromLocalStorage = (key) => {
  try {
    const data = JSON.parse(window.localStorage.getItem(key))
    return data
  } catch (error) {
    throw new Error('저장된 할 일 데이터를 불러오지 못했습니다.')
  }
}

export const storeToLocalStorage = (key, data) => {
  try {
    window.localStorage.setItem(key, data)
  } catch (error) {
    throw new Error('할 일을 저장하지 못했습니다.')
  }
}
