function getStorageItem(key) {
  try {
    const data = window.localStorage.getItem(key)
    return data && JSON.parse(data)
  } catch (error) {
    console.error('🚀 ~ getStorageItem ~ error', error)
  }
}

function setStorageItem(key, data) {
  if (!key || !data) {
    return
  }
  try {
    window.localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error(error)
  }
}

export { getStorageItem, setStorageItem }
