function getStorage() {
  let data = []
  if (localStorage.getItem('todos')) {
    data = JSON.parse(localStorage.getItem('todos'))
  }
  return typeof data === 'object' ? data : []
}

function setStorage(data) {
  localStorage.setItem('todos', JSON.stringify(data))
}
