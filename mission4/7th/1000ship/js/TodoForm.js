function TodoForm({$todoInput, $addTodoButton, todoApi, refreshTodoList}) {
  this.$todoInput = $todoInput
  this.$addTodoButton = $addTodoButton
  this.todoApi = todoApi
  this.refreshTodoList = refreshTodoList

  this.onTodoButtonClick = async () => {
    const todoText = this.$todoInput.value
    if (todoText.length > 0) {
      this.$todoInput.value = ''
      await this.todoApi.addTodoItem(todoText)
      await refreshTodoList()
    }
  }
  
  this.$addTodoButton.addEventListener('click', this.onTodoButtonClick)
}

export default TodoForm