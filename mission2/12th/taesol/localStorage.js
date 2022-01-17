const storage = (localStorage => {
  const getItem = (key, defaultValue) => {
    try {
      const dataFromLocal = localStorage.getItem(key)
      return dataFromLocal ? JSON.parse(dataFromLocal) : defaultValue
    } catch {
      return defaultValue
    }
  }

  const setItem = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      alert('데이터 로컬스토리지에 추가 실패')
    }
  }

  return { getItem, setItem }
})(window.localStorage)
