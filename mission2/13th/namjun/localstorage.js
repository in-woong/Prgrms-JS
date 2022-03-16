function LocalStorage() {
  this.setLocalStorage = (item) => {
    try {
      localStorage.setItem(item.id, JSON.stringify(item.todo))
    } catch (e) {
      console.log(e)
      throw new Error(
        'localstorage에 item을 저장하는 도중 에러가 발생헀습니다.'
      )
    }
  }

  this.getLocalStorageItem = (id) => {
    try {
      return JSON.parse(localStorage.getItem(id))
    } catch (e) {
      console.log(e)
      throw new Error(
        'localstorage에 item을 가져오는 도중 에러가 발생헀습니다.'
      )
    }
  }
}
