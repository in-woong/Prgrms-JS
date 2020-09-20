// function style TodoList 컴포넌트
export default function TodoList(
  renderEle,
  data,
  setTodoListIsCompleted,
  removeTodoList,
  userName
) {
  this.data = data
  this.renderEle = renderEle
  this.todoListEle = document.createElement('ol')
  renderEle.append(this.todoListEle)
  this.setTodoListIsCompleted = setTodoListIsCompleted
  this.removeTodoList = removeTodoList
  this.userName = userName

  // data값에 따라 todo-list를 동적으로 렌더링한다
  this.render = () => {
    const html =
      `${this.userName}의 TodoList` +
      this.data
        .map((data, index) => {
          return `<li key=${index}>${
            data.isCompleted
              ? `<s class="todo-list-item">${data.content}</s>`
              : `<span class="todo-list-item">${data.content}</span>`
          }
      <button class="todo-list-remove-button">삭제</button></li>`
        })
        .join('')
    this.todoListEle.innerHTML = html
  }
  // data값을 바꾸고 컴포넌트를 다시 렌더링한다
  this.setState = (nextData, userName) => {
    this.data = nextData
    this.userName = userName
    this.render()
  }

  this.bindEvent = () => {
    this.todoListEle.addEventListener('click', ({ target }) => {
      // todo list 삭선처리 이벤트 등록
      if (target.className === 'todo-list-item') {
        return this.setTodoListIsCompleted(
          target.closest('li').getAttribute('key')
        )
      }
      // todo list 삭제 이벤트 등록
      if (target.className === 'todo-list-remove-button') {
        return this.removeTodoList(target.closest('li').getAttribute('key'))
      }
    })
  }
  this.render()
  this.bindEvent()
}
