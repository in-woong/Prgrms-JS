import { todoValidate } from '../lib/Validation.js';
import ErrorMessage from '../lib/ErrorMessage.js';

function TodoList($app, initialState) {
  if (!new.target) {
    throw new Error(ErrorMessage.SET_NEW_ERROR);
  }

  todoValidate(initialState);

  this.$target = document.createElement('div');
  this.$target.setAttribute('data-component-type', 'TodoList');
  $app.appendChild(this.$target);

  this.state = initialState;

  this.setState = function (nextState) {
    this.state = nextState;
    console.log(this.state);
    this.render();
  };

  this.render = function () {
    this.$target.innerHTML = this.state
      .map((todo) => `<div class="${todo.isCompleted}">${todo.text}</div>`)
      .join('');
  };

  this.render();
}

export default TodoList;
