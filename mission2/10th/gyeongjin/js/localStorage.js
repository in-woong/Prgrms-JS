export const getItem = (key, defaultValue) => {
  try {
    const storedItem = window.localStorage.getItem(key)
    return storedItem ? JSON.parse(storedItem) : defaultValue
  } catch (e) {
    console.log(e.message)
    return defaultValue
  }
}

export const setItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e.message)
  }
}
