function App(data, listSelector, inputSelector) {
  this.todoListComponent = new TodoList(data, listSelector);
  this.todoInputComponent = new TodoInput(inputSelector);
}
