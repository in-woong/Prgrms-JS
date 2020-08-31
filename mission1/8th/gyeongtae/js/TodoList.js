// TodoList data배열 객체의 파라미터가 text, isCompleted가 있으면 true 없으면 false를 리턴
const isCorrectData = (value) => {
  return (
    typeof value.text === 'string' && typeof value.isCompleted === 'boolean'
  )
}
// TodoList data체크 함수
function todoListDataCheck(data) {
  if (data === null || data === undefined) {
    throw new Error('데이터가 null이거나 undefined상태입니다')
  }
  if (!Array.isArray(data)) {
    throw new Error('데이터가 array상태가 아닙니다')
  }
  // 배열의 요소중 하나라도 text, isCompleted프로퍼티중 하나가 없다면 false를 반환하여 error를 발생
  if (!data.every(isCorrectData)) {
    throw new Error('데이터 내용이 이상합니다')
  }
}

// function style TodoList 컴포넌트
function TodoList(querySelect, data) {
  this.data = data
  this.querySelect = document.querySelector(querySelect)
  // 만약 this가 window인경우 (생성자 함수에 new연산자를 붙이지 않은경우)
  // new 연산자를 붙이고 다시 생성자 함수를 실행한다
  if (!new.target) {
    throw new Error('이 함수는 생성자 함수입니다 new 연산자를 붙여주세요')
  }
  // TodoList data체크
  todoListDataCheck(this.data)
  // data값에 따라 todo-list를 동적으로 렌더링한다
  this.render = () => {
    let html = ''
    this.data.forEach((data) => {
      console.log(data)
      html += `<div>${
        data.isCompleted ? `<s>${data.text}</s>` : data.text
      }</div>`
    })
    this.querySelect.innerHTML = html
  }
  // data값을 바꾸고 컴포넌트를 다시 렌더링한다
  this.setState = (nextData) => {
    // TodoList data체크
    todoListDataCheck(nextData)
    this.data = nextData
    this.render()
  }
  this.render()
}
export default TodoList
