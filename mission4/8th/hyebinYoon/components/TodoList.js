// TodoList 컴포넌트
export default function TodoList({
  data,
  $target,
  onRemoveTodo,
  onToggleTodo,
}) {
  // function 형태의 선언인 경우 에러처리
  if (!(this instanceof TodoList))
    throw new Error('function 형태의 선언입니다.')
  checkData(data) // data 파라미터 에러처리

  this.todos = data

  // click 이벤트
  this.bindEvents = function () {
    $target.querySelector('ul').addEventListener('click', (event) => {
      if (!event.target) {
        return
      }
      const eventTarget = event.target
      const id = eventTarget.closest('li').id
      if (eventTarget.tagName == 'BUTTON') {
        // 삭제
        onRemoveTodo(id)
      } else {
        // 완료
        onToggleTodo(id)
      }
    })
  }

  this.setState = function (nextData) {
    checkData(nextData) // nextData 파라미터 에러처리
    this.todos = nextData
    this.render()
  }

  this.render = function () {
    if (this.todos) {
      const html = this.todos
        .map(
          (todo) =>
            `<li id="${todo._id}">
      ${todo.isCompleted ? `<s>${todo.content}</s>` : `${todo.content}`}
      <button >❌</button>
      </li>`
        )
        .join('')
      $target.querySelector('ul').innerHTML = html
    } else {
      $target.querySelector('ul').innerHTML = ''
    }
  }
  this.bindEvents()
  this.render()
}

// data가 올바르게 넘어왔는지 체크
function checkData(data) {
  // console.log(data)
  if (!data || !Array.isArray(data))
    throw new Error('data값이 유효하지 않습니다.') // data값 체크
  if (
    data.some(
      (value) =>
        typeof value.content !== 'string' ||
        typeof value.isCompleted !== 'boolean'
    )
  ) {
    throw new Error('text 또는 isCompleted 값이 유효하지 않습니다.')
  }
}
