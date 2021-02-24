import { KEY_CODE_ENTER, ERROR_PLEASE_ENTER_TODO } from './constants.js';

function TodoInput(targetElement, addTodo) {
  this.target = targetElement;

  this.target.addEventListener('keypress', function (e) {
    const todoText = e.target.value;
    const newTodo = {
      content: todoText,
      isCompleted: false,
    }

    if (e.keyCode === KEY_CODE_ENTER) {
      if (!todoText) {
        window.alert(ERROR_PLEASE_ENTER_TODO);
        return;
      }
      addTodo(newTodo);
      e.target.value = '';
      e.target.focus();
    }
  });
};

export default TodoInput;
