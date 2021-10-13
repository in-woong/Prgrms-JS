window.storage = (function(){
  function save(key, data) {
    try {
      window.localStorage.setItem(key, JSON.stringify(data))
    } catch(e) {
      // 용량 초과하는 경우에 대한 대비
      alert('용량을 초과해서 실패했습니다~')
    }
  }

  function load(key, defaultData) {
    const loadedData = window.localStorage.getItem(key)

    try {
      if (loadedData) {
        return JSON.parse(loadedData)
      }
      return defaultData
    } catch(e) {
      return defaultData
    }
  }

  return {
    save,
    load
  }
})()