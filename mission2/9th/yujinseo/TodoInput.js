const ENTER_KEY_CODE = 13;

function TodoInput(addTodo) {
  this.addTodo = addTodo;

  this.addTodoItem = function ({ text }) {
    const newTodo = {
      text: text,
      isCompleted: false
    }
    this.addTodo(newTodo);
    $todoInput.value = '';
  }

  const $todoInput = document.querySelector('#todo-input');

  $todoInput.addEventListener('keyup', (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.addTodoItem({ text: $todoInput.value });
    }
  })
}

export default TodoInput