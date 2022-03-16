export default function TodoList() {
  const notCompletedtodoListElement = document.querySelector(
    '#not-completed-todo-list'
  )
  const completedTodoListElement = document.querySelector(
    '#completed-todo-list'
  )

  // 랜더링
  this.render = function (todos) {
    const completedTodoList = todos.filter((todo) => todo.isCompleted === true)
    const notCompletedTodoList = todos.filter(
      (todo) => todo.isCompleted === false
    )

    renderTodoListByCompleteOrNot(
      completedTodoListElement,
      completedTodoList,
      true
    )
    renderTodoListByCompleteOrNot(
      notCompletedtodoListElement,
      notCompletedTodoList,
      false
    )

    function renderTodoListByCompleteOrNot(
      renderElement,
      renderTodoList,
      isCompleted
    ) {
      renderElement.innerHTML = renderTodoList.length
        ? renderTodoList
            .map(
              (todo) =>
                `<li draggable="true" id=${todo._id}>
              ${todo.content}${isCompleted ? '(완료)' : ''}
              <button class="complete-button">
                ${isCompleted ? '미완료하기' : '완료하기'}
              </button>
              <button class="delete-button">삭제하기</button>
            </li>`
            )
            .join('')
        : '<li>현재 목록이 존재하지 않습니다</li>'
    }
  }
}
