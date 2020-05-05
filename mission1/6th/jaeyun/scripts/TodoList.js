class TodoList {
  constructor(data) {
    this.todoList = data
  }

  addListToTag() {
    const todoHtml = this.todoList.map((list) => `<div>${list.text}</div>`)
    return todoHtml
  }

  render() {
    const todoContainer = document.getElementById('todo-list')

    todoContainer.innerHTML = this.addListToTag()
  }
}

export default TodoList
