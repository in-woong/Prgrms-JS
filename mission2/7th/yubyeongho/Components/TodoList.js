function TodoList(elementId, todos, updateTodoCount) {
  this.$elementId = elementId;
  this.todos = todos;
  const $removeButton = `<button id="todo-remove-button">삭제</button>`;

  if (!this.todos) {
    throw new Error('데이터 타입이 null 혹은 undefined으로 적합하지 않습니다.');
  }

  if (!Array.isArray(this.todos)) {
    throw new Error('배열 타입의 데이터가 아닙니다.');
  }

  this.todos.forEach((todo) => {
    if (typeof todo.text !== 'string' || todo.text === '') {
      throw new Error(
        '할일 목록의 텍스트 타입이 적합하지 않거나, 텍스트가 비어 있습니다.'
      );
    }
  });

  if (!(this instanceof TodoList)) {
    throw new Error('new 키워드를 사용해주세요.');
  }

  this.render = function () {
    this.$elementId.innerHTML = `<ol>${this.todos.map((todo) =>
      todo.isCompleted
        ? `<li><s><p id="todo-text">${todo.text}</p> ${$removeButton}</s></li>`
        : `<li><p id="todo-text">${todo.text}</p> ${$removeButton}</li>`
    )}</ol>`;

    this.editTodos();
  };

  this.editTodos = function () {
    //클릭시 li에서 인덱스를 어떻게 호출할 것인지

    const $buttons = document.querySelectorAll('#todo-remove-button');
    $buttons.forEach((button, idx) => {
      button.addEventListener('click', () => {
        this.todos.splice(idx, 1);
        this.render();
        updateTodoCount(this.todos);
      });
    });

    const $todosText = document.querySelectorAll('#todo-text');
    $todosText.forEach((text, idx) => {
      text.addEventListener('click', () => {
        this.todos[idx].isCompleted = !this.todos[idx].isCompleted;
        this.render();
        updateTodoCount(this.todos);
      });
    });
  };

  this.setState = function (nextData) {
    this.todos = nextData;
    this.render();
  };

  this.init = function () {
    this.render();
  };

  this.init();
}

export default TodoList;
