const storage = {
  save: (key, data) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(data))
    } catch (err) {
      alert(`Error : ${err}`)
    }
  },
  load: (key, defaultData) => {
    const loadedData = window.localStorage.getItem(key)

    try {
      if (loadedData) return JSON.parse(loadedData)
      return defaultData
    } catch (err) {
      alert(`Error : ${err}`)
    }
  },
}

export { storage }
