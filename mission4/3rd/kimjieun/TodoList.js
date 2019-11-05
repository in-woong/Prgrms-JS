function TodoList({ data, isLoading }) {
  this.data = data
  this.isLoading = isLoading

  this.setState = data => {
    this.data = data
    this.render()
  }

  this.createTodoListsHTMLString = ({ id, content, isCompleted }) => {
    const deleteButton = '<button class="delete-todo-button">할일 삭제</button>'
    const completedButton =
      '<button class="complete-todo-button">할일 완료</button>'
    return `<li data-idx=${id}>${
      isCompleted ? `<strike>${content}</strike>` : `${content}`
    } ${deleteButton} ${completedButton}</li>`
  }

  this.render = () => {
    const $todoList = document.querySelector('#todo-list')
    const todoListHTMLString = this.data
      .map(this.createTodoListsHTMLString)
      .join('')
    $todoList.innerHTML = todoListHTMLString
  }
}

export default TodoList
