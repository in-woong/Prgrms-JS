const isTodoDataValid = function(param) {
  // 데이터가 null / undefined 또는 array가 아닐 경우 판별
  if (isNullOrUndefined(param) || !isArray(param)) {
    return false
  }

  // 데이터 내용이 이상할 때 판별
  return param.every(
    item =>
      isDataTypeCorrect(item, '[object Object]') &&
      'text' in item &&
      isDataTypeCorrect(item.text, '[object String]')
  )
}

// 전달 받은 Todo list 데이터를 그리는 컴포넌트
function TodoList($element, data, eventHandler) {
  // new 키워드를 붙이지 않고 함수 실행 시
  if (!(this instanceof TodoList)) {
    throw new Error('[TodoList] new 키워드로 실행되지 않았습니다.')
  }

  // 전달받은 데이터가 올바른 데이터인지 확인
  if (!isTodoDataValid(data)) {
    throw new Error('[TodoList] 데이터가 올바르지 않습니다.')
  }

  if (
    !eventHandler ||
    !isEventHandlerValid(eventHandler.onDelete) ||
    !isEventHandlerValid(eventHandler.onClickItem)
  ) {
    throw new Error('[TodoList] 이벤트 핸들러가 정의되지 않았습니다.')
  }

  this.data = data
  this.$element = $element
  const onDelete = eventHandler.onDelete
  const onClickItem = eventHandler.onClickItem

  const createTodoHTMLString = (item, index) => {
    return `<div class="todo-list"> 
      <div class="list-item" id=todoitem-${index}>
      ${
        item.isCompleted
          ? `<s> ${item.text} </s>`
          : `<span> ${item.text} </span>`
      } 
      </div>
      <button id=deletebutton-${index} style="margin-left: 10;"}}> X </button> 
    </div>`
  }

  this.render = function() {
    this.$element.innerHTML = `${this.data.map(createTodoHTMLString).join('')}`

    for (let i = 0; i < this.data.length; i++) {
      // 각 아이템 클릭 이벤트 리스너 추가
      document.querySelector(`#todoitem-${i}`).addEventListener('click', e => {
        onClickItem(e.currentTarget.id.split('-')[1])
      })

      // 삭제 버튼 이벤트 리스너 추가
      document
        .querySelector(`#deletebutton-${i}`)
        .addEventListener('click', e => {
          onDelete(e.target.id.split('-')[1])
        })
    }
  }

  this.setState = function(nextData) {
    if (!isTodoDataValid(nextData)) {
      throw new Error('데이터가 올바르지 않습니다.')
    }

    this.data = nextData
    this.render()
  }

  this.render()
}
