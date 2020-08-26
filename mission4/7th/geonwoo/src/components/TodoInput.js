import { bindEvent } from '../utils/index.js';

class TodoInput {
  constructor(target, addUserTodo) {
    this.$target = target;
    this.$btn = document.querySelector('#add-todo-button');

    bindEvent(this.$btn, 'click', async (e) => {
      addUserTodo(this.$target);
    });

    bindEvent(this.$target, 'keydown', (e) => {
      if (e.key === 'Enter') {
        addUserTodo(this.$target);
      }
    });
  }
}

export default TodoInput;
