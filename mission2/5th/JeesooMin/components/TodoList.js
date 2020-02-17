import { isNil, isDataTypeCorrect } from '../validator.js'

const isTodoDataValid = function(param) {
  // 데이터가 null / undefined 또는 array가 아닐 경우 판별
  if (isNil(param) || !Array.isArray(param)) {
    return false
  }

  // 데이터 내용이 이상할 때 판별
  return param.every(
    item =>
      isDataTypeCorrect(item, '[object Object]') &&
      'text' in item &&
      typeof item.text === 'string'
  )
}

// 전달 받은 Todo list 데이터를 그리는 컴포넌트
function TodoList(todoListData) {
  // new 키워드를 붙이지 않고 함수 실행 시
  if (!(this instanceof TodoList)) {
    throw new Error('[TodoList] new 키워드로 실행되지 않았습니다.')
  }

  const { $element, data, onDelete, onClickItem } = todoListData

  // 전달받은 데이터가 올바른 데이터인지 확인
  if (!isTodoDataValid(data)) {
    throw new Error('[TodoList] 데이터가 올바르지 않습니다.')
  }

  if (!onDelete || !onClickItem) {
    throw new Error('[TodoList] 이벤트 핸들러가 정의되지 않았습니다.')
  }

  this.data = data
  this.$element = $element
  this.onDelete = onDelete
  this.onClickItem = onClickItem

  this.$element.addEventListener('click', e => {
    if (e.target) {
      if (e.target.nodeName === 'SPAN' || e.target.nodeName === 'S') {
        const getClickedId = e.target.parentNode.id.split('-')[1]
        this.onClickItem(getClickedId)
      }
      if (e.target.nodeName === 'BUTTON') {
        const getDeleteId = parseInt(e.target.id.split('-')[1])
        this.onDelete(getDeleteId)
      }
    }
  })

  this.render = function() {
    this.$element.innerHTML = `${this.data
      .map((item, index) => {
        return `<div class="todo-list"> 
          <div class="list-item" id=todoitem-${index}>
          ${
            item.isCompleted
              ? `<s>${item.text}</s>`
              : `<span>${item.text}</span>`
          } 
          </div>
          <button id=deletebutton-${index} style="margin-left: 10;"}}> X </button> 
        </div>`
      })
      .join('')}`
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

export default TodoList
