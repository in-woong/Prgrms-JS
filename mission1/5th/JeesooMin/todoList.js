const isParamValid = function(param) {
  // 데이터가 null / undefined 또는 array가 아닐 경우
  if (!param || !Array.isArray(param)) {
    return false
  }

  // 데이터 내용이 이상할 때
  var result = true
  if (param.length > 0) {
    result = param.every(
      item =>
        Object.prototype.toString.call(item) === '[object Object]' &&
        'text' in item
    )
  }

  return result
}

// 전달 받은 Todo list 데이터를 그리는 컴포넌트
function TodoList(data, elementId) {
  // new 키워드를 붙이지 않고 함수 실행 시
  if (!(this instanceof TodoList)) {
    throw new Error('new 키워드로 실행되지 않았습니다.')
  }

  // 전달받은 데이터가 올바른 데이터인지 확인
  if (!isParamValid(data)) {
    throw new Error('데이터가 올바르지 않습니다.')
  }

  this.data = data
  this.elementId = elementId

  const renderItem = item => {
    if (item.isCompleted) {
      return `<div> <s> ★ ${item.text} </s> </div>`
    }
    return `<div> ★ ${item.text} </div>`
  }

  this.render = function() {
    var renderData = this.data.map(item => renderItem(item))
    var container = `<div class="todo-list"> ${renderData.join('')} </div>`
    document.querySelector(`#${this.elementId}`).innerHTML = container
  }

  this.setState = function(nextData) {
    if (!isParamValid(nextData)) {
      throw new Error('데이터가 올바르지 않습니다.')
    }

    if (this.data !== nextData) {
      this.data = nextData
      this.render()
    }
  }
}
