function getItemFromLocalStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
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
