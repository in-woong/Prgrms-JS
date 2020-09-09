const store = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      localStorage.clear()
    }
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key))
  },
}
