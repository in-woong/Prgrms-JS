function TodoCount() {
  const todoCountElement = document.querySelector('#todo-count')

  // 랜더링
  this.render = function (todos) {
    todoCountElement.innerHTML = `
    총 Todo의 갯수: ${todos.length}
    완료처리된 Todo의 갯수: ${todos.filter((todo) => todo.isCompleted).length}
    `
  }
}

export default TodoCount
