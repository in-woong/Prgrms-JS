// 인자값 에러 체크
const dataCheck = data => {
  if (!data || !Array.isArray(data)) {
    // !data => data 값이 null | undefined 일 경우 true를 리턴
    // data가 배열이 아닌 다른 원시값일 경우 에러 발생
    throw new Error('error message')
  }

  data.find(obj => {
    if (!obj.hasOwnProperty('text')) {
      // 키값이 text 존재하는지 확인
      throw new Error('error message')
    } else if (typeof obj.text !== 'string') {
      // text 값이 string인지 확인
      throw new Error('error message')
    }
  })
}

// TodoList 컴포넌트 생성 함수
function TodoList({ $target, initialState, onTodoClick, onRemove }) {
  if (!new.target) {
    // new 키워드 안 붙이고 함수 실행시 에러 발생
    throw new Error('error message with new')
  }
  // parameter data 값이 올바른지 체크하는 함수
  dataCheck(initialState)

  const $todoList = document.createElement('div')
  $target.appendChild($todoList)

  this.$target = $target
  this.state = initialState
  this.onTodoClick = onTodoClick
  this.onRemove = onRemove

  // 렌더링 함수
  this.render = function() {
    // string => html string 변환 함수
    const html = this.state
      .map(
        ({ text, isCompleted }, index) =>
          // isCompleted가 true일 경우 삭천처리를 해준다
          `<li class="todo__item" data-idx="${index}">${
            isCompleted ? `<s>${text}</s>` : text
          }<button class="delete__btn">삭제</button></li>`
      )
      .join('')
    $todoList.innerHTML = `<ul class="todo">${html}</ul>`
  }
  // setState 함수
  this.setState = function(nextState) {
    dataCheck(nextState)
    this.state = nextState
    this.render()
  }

  this.render()

  $todoList.addEventListener('click', ({ target }) => {
    const { nodeName } = target

    const $li = target.closest('.todo__item')
    const { idx: indexString } = $li.dataset
    const idx = parseInt(indexString)

    nodeName === 'BUTTON' ? this.onRemove(idx) : onTodoClick(indexString)
  })
}
