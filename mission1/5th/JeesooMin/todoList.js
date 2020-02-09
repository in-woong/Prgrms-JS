const isTodoDataValid = function(param) {
  // 데이터가 null / undefined 또는 array가 아닐 경우 판별
  if (isNullOrUndefined(param) || !isArray(param)) {
    return false
  }

  // 데이터 내용이 없거나 이상할 때 판별
  if (param.length <= 0) {
    return false
  }

  return param.every(
    item =>
      isDataTypeCorrect(item, '[object Object]') &&
      'text' in item &&
      isDataTypeCorrect(item.text, '[object String]')
  )
}

// 전달 받은 Todo list 데이터를 그리는 컴포넌트
function TodoList(data, element) {
  // new 키워드를 붙이지 않고 함수 실행 시
  if (!(this instanceof TodoList)) {
    throw new Error('new 키워드로 실행되지 않았습니다.')
  }

  // 전달받은 데이터가 올바른 데이터인지 확인
  if (!isTodoDataValid(data)) {
    throw new Error('데이터가 올바르지 않습니다.')
  }

  this.data = data
  this.element = element

  const createTodoHTMLString = item => {
    if (item.isCompleted) {
      return `<div> <s> ★ ${item.text} </s> </div>`
    }
    return `<div> ★ ${item.text} </div>`
  }

  this.render = function() {
    this.element.innerHTML = `<div class="todo-list"> ${this.data
      .map(createTodoHTMLString)
      .join('')}</div>`
  }

  this.setState = function(nextData) {
    if (!isTodoDataValid(nextData)) {
      throw new Error('데이터가 올바르지 않습니다.')
    }

    // if (JSON.stringify(this.data) !== JSON.stringify(nextData)) {
    this.data = nextData
    this.render()
    // }
  }

  this.render()
}
