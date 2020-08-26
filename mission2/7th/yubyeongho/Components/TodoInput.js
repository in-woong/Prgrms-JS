function TodoInput(elementId, addTodo, removeAll) {
  if (!(this instanceof TodoInput)) {
    throw new Error('new 키워드를 사용해주세요.');
  }

  this.$elementId = elementId;

  this.init = function () {
    this.$elementId.innerHTML = `<input id="new-todo-input" type="text" placeholder="할 일을 입력해주세요.">
                  </input><button id="new-todo-add-button">추가</button><button id="remove-all-todos-button">모두 삭제</button>`;

    const $todoInput = this.$elementId.querySelector('#new-todo-input');
    const $addTodoButton = this.$elementId.querySelector(
      '#new-todo-add-button'
    );

    const $removeAllButton = this.$elementId.querySelector(
      '#remove-all-todos-button'
    );

    $removeAllButton.addEventListener('click', (e) => {
      removeAll();
    });

    $addTodoButton.addEventListener('click', (e) => {
      e.preventDefault();
      const inputValue = $todoInput.value;
      addTodo(inputValue);
      $todoInput.value = '';
    });

    $todoInput.addEventListener('keypress', (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        const inputValue = $todoInput.value;
        addTodo(inputValue);
        $todoInput.value = '';
      }
    });
  };

  this.init();
}

export default TodoInput;
