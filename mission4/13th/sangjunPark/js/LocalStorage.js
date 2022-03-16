export default function LocalStorage() {
  // 로컬 스토리지에 데이터 넣기
  this.pushDataInLocalStorage = function (textValue) {
    try {
      localStorage.setItem(
        localStorage.length,
        JSON.stringify({
          text: textValue,
          isCompleted: false,
        })
      )
    } catch (error) {
      this.errorHandlingInLocalStorage(error)
    }
  }

  // 로컬 스토리지 내부에 들어있는 모든 데이터 가져오기
  this.getAllDataInLocalStorage = function () {
    let arr = []
    if (localStorage.length) {
      for (let i = 0; i < localStorage.length; i++) {
        arr = [...arr, JSON.parse(localStorage.getItem(i))]
      }
    }
    return arr
  }

  // 로컬 스토리지 내부에 들어있는 특정 데이터를 id를 기반으로 가져오기
  this.getDataInLocalStorageById = function (id) {
    return JSON.parse(localStorage.getItem(id))
  }

  // 로컬 스토리지 내부에 들어있는 특정 데이터를 id를 기반으로 업데이트하기
  this.updateDataInLocalStorageById = function (id, targetObject) {
    localStorage.setItem(id, JSON.stringify(targetObject))
  }

  // 로컬 스토리지의 모든 데이터를 지우기
  this.deleteAllDataInLocalStorage = function () {
    localStorage.clear()
  }

  this.errorHandlingInLocalStorage = function (err) {
    if (err == QUOTA_EXCEEDED_ERR) alert('Quota exceeded!')
  }
}
