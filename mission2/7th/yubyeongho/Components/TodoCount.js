function TodoCount(elementId, todos) {
  this.$elementId = elementId;
  this.todos = todos;

  this.init = () => {
    const totalTodosNum = this.todos.length;
    const completeTodosNum = this.todos.filter((todo) => todo.isCompleted)
      .length;

    this.$elementId.innerHTML = `전체 할 일 갯수: ${totalTodosNum}, 완료 할 일 갯수: ${completeTodosNum}`;
  };

  this.setState = (newTodos) => {
    this.todos = newTodos;
    this.init();
  };

  this.init();
}

export default TodoCount;
