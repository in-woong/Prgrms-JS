const todoItemDeleteTemaplate = () => {
  return `<input class="delete-item-button" type="button" value="삭제">`
}

const todoItemTemplate = ({ id, text, isCompleted }) => {
  return isCompleted ? `<li class="todo-item completed" data-id="${id}">${text} ${todoItemDeleteTemaplate()}</li>` : `<li class="todo-item" data-id="${id}">${text} ${todoItemDeleteTemaplate()}</li>`
}

export default todoItemTemplate
