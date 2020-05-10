function TodoCount($target, data) {
  this.todoData = data;

  if (!new.target) {
    throw new Error('TodoCount를 new로 사용해야 합니다.');
  }

  const getTodoListCount = (todoData) => {
    return todoData.length;
  }
  const getCompletedTodoListCount = (todoData) => {
    return todoData.filter(todo => todo.isCompleted).length;
  }

  $target.insertAdjacentHTML('afterend', `<section>
      <input type="checkbox" checked disabled>
      <span id="todo-count-group">${getCompletedTodoListCount(this.todoData)} / ${getTodoListCount(this.todoData)}</span>
    </section>`);

  this.render = () => {
    const $todoCountGroup = document.querySelector('#todo-count-group');
    $todoCountGroup.innerHTML = `${getCompletedTodoListCount(this.todoData)} / ${getTodoListCount(this.todoData)}`;
  }

  this.setState = (newData) => {
    this.todoData = newData;
    this.render();
  }

  this.render();
}

export default TodoCount;
