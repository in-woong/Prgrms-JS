function TodoCount(todoCountContainer, initialState) {
  this.render = function (paramState) {
    const totalTodoNumber = paramState.todos.length;
    const doneTodoNumber = paramState.todos.filter(
      (index) => index.isCompleted
    ).length;

    todoCountContainer.innerHTML = `<p>할 일 ${
      doneTodoNumber + '/' + totalTodoNumber
    }</p>`;
  };
  this.setCount = function (paramState) {
    this.render(paramState);
  };
  this.render(initialState);
}
export default TodoCount;
