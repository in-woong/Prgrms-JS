function App($target, data) {
  const todoList = new TodoList($target, data)
  const todoInput = new TodoInput(todoList.setState)
}
