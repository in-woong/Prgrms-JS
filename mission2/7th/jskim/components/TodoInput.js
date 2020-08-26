export default class TodoInput {
  constructor(addTodoItem, removeAllTodo) {
    this.addTodoItem = addTodoItem
    this.removeAllTodo = removeAllTodo
    const todoInputFormElement = document.createElement('div')
    todoInputFormElement.className = 'todo-input-container'
    todoInputFormElement.innerHTML = `
      <form class="input-form">
        <input
          id="add-todo-input"
          type="text"
          placeholder="Todo를 입력해주세요."
        />
        <button id="add-todo-button" type="submit">추가</button>
        <button id="remove-all-todo-button" type="button">전체 삭제</button>
      </form>
    `
    this.todoInputFormElement = todoInputFormElement
  }

  bindingEvent = () => {
    const inputTodoElement = document.querySelector('#add-todo-input')
    const addTodoButtonElement = document.querySelector('#add-todo-button')
    const removeAllButtonElement = document.querySelector(
      '#remove-all-todo-button'
    )
    if (inputTodoElement && addTodoButtonElement) {
      inputTodoElement.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          this.addTodoEvent(event, event.target)
        }
      })

      addTodoButtonElement.addEventListener('click', (event) => {
        this.addTodoEvent(event, inputTodoElement)
      })
    }

    if (removeAllButtonElement) {
      removeAllButtonElement.addEventListener('click', (event) => {
        this.removeAllTodo()
        event.preventDefault()
      })
    }
  }

  addTodoEvent = (event, targetElement) => {
    if (!targetElement.value.trim()) {
      return
    }
    this.addTodoItem(targetElement.value)
    targetElement.value = ''
    event.preventDefault()
  }
}
