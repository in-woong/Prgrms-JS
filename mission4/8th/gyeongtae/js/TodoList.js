// function style TodoList 컴포넌트
export default function TodoList(
  renderEle,
  data,
  setTodoListIsCompleted,
  removeTodoList,
  isDisplayCompleted
) {
  this.data = data.todoList
  this.renderEle = renderEle
  this.todoListEle = document.createElement('ul')
  this.todoListEle.className = 'todoList'
  renderEle.append(this.todoListEle)
  this.setTodoListIsCompleted = setTodoListIsCompleted
  this.removeTodoList = removeTodoList
  this.isDisplayCompleted = isDisplayCompleted
  this.todoListEle.setAttribute('isDisplayCompleted', isDisplayCompleted)

  // data값에 따라 todo-list를 동적으로 렌더링한다
  this.render = () => {
    const html = `
    ${!this.isDisplayCompleted ? 'TodoList' : '완료된 TodoList'}
    ${this.data
      .map((data, index) => {
        if (this.isDisplayCompleted === data.isCompleted) {
          return `<li key=${index}>${
            data.isCompleted
              ? `<s class="todo-list-item" draggable="true" >${data.content}</s>`
              : `<span class="todo-list-item" draggable="true" >${data.content}</span>`
          }
           <button class="todo-list-remove-button">삭제</button>
           </li>`
        }
      })
      .join('')}
      `

    this.todoListEle.innerHTML = html
  }
  // data값을 바꾸고 컴포넌트를 다시 렌더링한다
  this.setState = (nextData) => {
    this.data = nextData.todoList
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

    this.todoListEle.addEventListener('dragstart', (event) => {
      const { target } = event
      event.dataTransfer.setData(
        'dragStartElementsIsDisplayCompleted',
        target.closest('ul').getAttribute('isDisplayCompleted')
      )
      event.dataTransfer.setData(
        'key',
        target.closest('li').getAttribute('key')
      )
    })
    this.todoListEle.addEventListener('dragover', (event) => {
      event.preventDefault()
    })
    this.todoListEle.addEventListener('drop', (event) => {
      // 드래그하여 드랍한곳이 동일한곳 (ex: TodoList에서 완료된 TodoList로 리스트를 옮기지 않은경우)
      // 이라면 핸들러를 호출하지 않는다
      if (
        event.dataTransfer.getData('dragStartElementsIsDisplayCompleted') !==
        event.target.closest('ul').getAttribute('isDisplayCompleted')
      ) {
        event.preventDefault()
        this.setTodoListIsCompleted(event.dataTransfer.getData('key'))
      }
    })
  }
  this.render()
  this.bindEvent()
}
