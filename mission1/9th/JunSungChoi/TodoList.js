const isEmpty = (data) => {
  if (data === null || data === undefined) {
      return true
    }
  return false
}

const propertyChecker = (data) => {
  let isValid = true

  data.forEach(item => {
    if(!item.hasOwnProperty('text')) {
      isValid = false
    }
  })
  return isValid
}

function TodoList (id, data) {
  if (isEmpty(data) || !Array.isArray(data) || !propertyChecker(data)) {
    throw new Error ('잘못된 데이터 입니다.')
  }
  

  if (!new.target) {
    throw new Error ('new 키워드를 사용해주세요.')
  }

  this.data = data
  this.id = id

  const renderItem = () => this.data.map(item => item.isCompleted ? `<s>${item.text}</s>` : item.text).join('</br>')

  this.render = () => {
    document.querySelector(this.id).innerHTML = renderItem()
  }

  this.setState = (nextData) => {
    if (isEmpty(nextData) || !Array.isArray(nextData) || !propertyChecker(nextData)) {
      throw new Error ('잘못된 데이터 입니다.')
    }

    this.data = nextData
    this.render()
  }
  

  this.render()
}
