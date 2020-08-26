export default class TodoCount {
  constructor(todos) {
    const todoCountElement = document.createElement('div')
    todoCountElement.className = 'todos-count'
    this.todoCountElement = todoCountElement

    this.setState(todos)
  }

  setState(todos) {
    this.todoCountElement.innerHTML = `
      <span>완료: ${todos.filter((todo) => todo.isCompleted).length}개</span>
      <span>/</span>
      <span>총: ${todos.length}개</span>
    `
  }
}
