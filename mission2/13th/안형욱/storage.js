const storage = {
  getItem: (key, defaultValue = []) => {
    try {
      const data = JSON.parse(localStorage.getItem(key)) || defaultValue
      return data
    } catch (e) {
      console.error(e)
      return defaultValue
    }
  },
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(e)
    }
  },
}
