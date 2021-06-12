const localStorage = window.localStorage

export const getLocalStorageItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    console.error(e)
  }
}

export const setLocalStorageItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}
