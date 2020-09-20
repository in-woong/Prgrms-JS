export const setStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    throw new Error(error)
  }
}

export const getStorageData = (key) => {
  const data = localStorage.getItem('data')
  return data ? JSON.parse(data[key]) : []
}
