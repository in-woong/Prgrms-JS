// function style TodoList 컴포넌트
export default function TodoList(
  renderEle,
  data,
  setTodoListIsCompleted,
  removeTodoList
) {
  this.data = data
  this.renderEle = renderEle
  this.todoListEle = document.createElement('div')
  renderEle.append(this.todoListEle)
  this.setTodoListIsCompleted = setTodoListIsCompleted
  this.removeTodoList = removeTodoList

  // data값에 따라 todo-list를 동적으로 렌더링한다
  this.render = () => {
    const html = this.data
      .map((data, index) => {
        return `<div key=${index}>${
          data.isCompleted
            ? `<s class="todo-list-item">${data.text}</s>`
            : `<span class="todo-list-item">${data.text}</span>`
        }
      <button class="todo-list-remove-button">삭제</button></div>`
      })
      .join('')
    this.todoListEle.innerHTML = html
  }
  // data값을 바꾸고 컴포넌트를 다시 렌더링한다
  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.bindEvent = () => {
    this.todoListEle.addEventListener('click', ({ target }) => {
      // todo list 삭선처리 이벤트 등록
      if (target.className === 'todo-list-item') {
        return this.setTodoListIsCompleted(
          target.closest('div').getAttribute('key')
        )
      }
      // todo list 삭제 이벤트 등록
      if (target.className === 'todo-list-remove-button') {
        return this.removeTodoList(target.closest('div').getAttribute('key'))
      }
    })
  }
  this.render()
  this.bindEvent()
}
