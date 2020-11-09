const propertyChecker = (data) => {
  data.forEach(item => {
    if(!item.hasOwnProperty('text') || !item.hasOwnProperty('isCompleted')) {
      return false
    }
  })
  return true
}

function TodoList (id, data) {
  if (!Array.isArray(data) || !propertyChecker(data) || data.length < 0) {
    throw new Error ('잘못된 데이터 입니다.')
  }
  

  if (!new.target) {
    throw new Error ('new 키워드를 사용해주세요.')
  }

  this.data = data
  this.id = id

  this.render = () => {
    document.querySelector(this.id).innerHTML = `<ul>${this.data.map(item => item.isCompleted ? `<li>${item.text}</li>` : item.text).join('</br>')}</ul>`
  }

  this.setState = (nextData) => {
    if (!Array.isArray(nextData) || !propertyChecker(nextData) || nextData.length < 0) {
      throw new Error ('잘못된 데이터 입니다.')
    }

    this.data = nextData
    this.render()
  }
  

  this.render()
}
