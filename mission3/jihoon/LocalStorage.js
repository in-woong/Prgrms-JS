function getItemFromLocalStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    alert("[LocalStorage:getItem] 로컬스토리지로부터 값을 가져올 수 없어, 초기화 된 상태로 앱이 수행됩니다.");
    throw e
  }
}

function setItemIntoLocalStorage(key, todos) {
  try {
    return localStorage.setItem(key, JSON.stringify(todos))
  } catch(e) {
    throw e
  }
}
