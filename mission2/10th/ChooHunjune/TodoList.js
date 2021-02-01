var data = [
  {
    text: 'JS 공부하기',
    isCompleted: true
  },
  {
    text: 'JS 복습하기',
    isCompleted: false
  }
]
var data2 = [
  {
    text: 'C++ 공부하기',
    isCompleted: false
  },
  {
    text: 'Python 고급 배우기',
    isCompleted: false
  }
]
var data3 = [
  {
    text: '수강신청 하기',
    isCompleted: false
  },
  {
    text: '시간표 짜기',
    isCompleted: true
  }
]


  
const validateData = (data) => {
  // check if data is null or undefined
  if (!data) {
    throw new Error('data의 형식이 올바르지 않습니다..')
  }
  // type check
  const isValidData = data.every(
    (todo) => typeof todo.text === 'string' && typeof todo.isCompleted === 'boolean')
  if (!isValidData) {
    throw new Error('data의 타입이 올바르지 않습니다.')
  }
}

function todoList(data, DOMselector) {
  this.state = data
  this.validation = (data) => {
    validateData(data)
    // check whether function is called via new
    if (!new.target) {
      throw new Error('함수가 new 키워드로 호출되지 않았습니다.')
    }
  }
  this.setState = (nextData) => {
    this.validation(nextData)
    this.state = nextData
    this.render()
  }
  this.render = function() {
    todoItemText = this.state.map(
      item => item.isCompleted ? `<li><s>${item.text}</s></li>` : `<li>${item.text}</li>`).join('')
    todoItemText = '<ul>' + todoItemText + '</ul>'
    DOMselector.innerHTML = todoItemText
  }

  this.validation(this.state)
  this.render()
}
