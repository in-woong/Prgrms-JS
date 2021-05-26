function TodoCount(data) {
  this.data = data;

  const todoCount = (data) => {
    const $totalTodo = document.querySelector('#todo-total-count');
    const $isCompleted = document.querySelector('#todo-iscompleted-count');

    const totalTodoCount = data.length;
    const completedTodoCount = data.filter(({ isCompleted }) => isCompleted === true).length;

    $totalTodo.innerHTML = totalTodoCount;
    $isCompleted.innerHTML = completedTodoCount;
  }
  todoCount(data);
}

export default TodoCount;