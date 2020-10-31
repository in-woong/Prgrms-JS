function isEmpty (data) {
  if (data === null || data === undefined) {
      return true
    }
  return false
}

function propertyChecker (data) {
  let isValid = true

  data.forEach(item => {
    if(!item.hasOwnProperty('text')) {
      isValid = false
    }
  })
  return isValid
}

function TodoList (data) {
  if (isEmpty(data) || !Array.isArray(data) || !propertyChecker(data)) {
    throw new Error ('잘못된 데이터 입니다.')
  }
  

  if (!new.target) {
    throw new Error ('new 키워드를 사용해주세요.')
  }

  this.data = data
  this.render = function () {
    document.querySelector('#todo-list').innerHTML = data.map(item => `<p>${item.text}</p>`).join('')
  }

  this.render()
}
