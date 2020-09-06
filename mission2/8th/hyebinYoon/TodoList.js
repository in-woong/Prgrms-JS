// TodoList 컴포넌트
function TodoList(data, tagID) {
  // function 형태의 선언인 경우 에러처리
  if (!(this instanceof TodoList))
    throw new Error('function 형태의 선언입니다.')
  checkData(data) // data 파라미터 에러처리

  this.todos = data
  this.tagID = tagID
  this.setState = function (nextData) {
    checkData(nextData) // nextData 파라미터 에러처리
    this.todos = nextData
    this.render()
  }
  this.render = function () {
    const html = this.todos
      .map(
        (todo) =>
          `<li>${todo.isCompleted ? `<s>${todo.text}</s>` : todo.text}</li>`
      )
      .join('')
    document.querySelector(`#${this.tagID}-list`).innerHTML = `<ul>${html}</ul>`
  }
  this.render()
}

// data가 올바르게 넘어왔는지 체크
function checkData(data) {
  if (!data || !Array.isArray(data))
    throw new Error('data값이 유효하지 않습니다.') // data값 체크
  if (data.some((value) => typeof value.text !== 'string' || !value.text))
    throw new Error('text값이 유효하지 않습니다.') // text 체크
  if (data.some((value) => typeof value.isCompleted !== 'boolean'))
    throw new Error('isCompleted값이 유효하지 않습니다.') // isCompleted 체크
}
