const renderTodoText = (text, isCompleted) => isCompleted ? `<s>${text}</s>` : `<span>${text}</span>`

const checkIsTodoListDataFine = (data) => {
  if (!Array.isArray(data)) {
    throw new Error("todos 타입 에러: todos는 Array 타입입니다.")
  }

  const hasWeirdAttribute = data.some(item => 
    !item || typeof item.text !== 'string' || typeof item.isCompleted !== 'boolean'
  )

  if (hasWeirdAttribute) {
    throw new Error("todos 데이터 에러: todos배열 요소의 데이터 형식을 확인해주세요.")
  }
}

function TodoList(todos, $target) {
  if (!(this instanceof TodoList)) {
    throw new Error("new 키워드써서 쓰세요.")
  }

  checkIsTodoListDataFine(todos)

  this.todos = todos
  this.$target = $target
  this.callbacks = []

  this.render()
}

TodoList.prototype.render = function() {
  this.$target.innerHTML = this.todos.reduce((result, todo) => (
    result + (`
      <li>
        ${renderTodoText(todo.text, todo.isCompleted)}
        ${todo.isCompleted ? '✅' : ''}
      </li>
  `)), '')
}
