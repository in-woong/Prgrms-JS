const App = function($target, initialState) {
  this.state = initialState

  this.todoInput = new TodoInput()
  this.todoList = new TodoList($target, this.state)
}
