import { todoValidate } from '../lib/Validation.js';
import ErrorMessage from '../lib/ErrorMessage.js';

function TodoList($app, initialState, onCompleteToggle) {
  if (!new.target) {
    throw new Error(ErrorMessage.SET_NEW_ERROR);
  }

  todoValidate(initialState);

  this.$target = document.createElement('div');
  this.$target.setAttribute('data-component-type', 'TodoList');
  $app.appendChild(this.$target);
  this.onCompleteToggle = onCompleteToggle;

  this.state = initialState;

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render = function () {
    const htmlString = this.state
      .map((todo) => `<li class="complete_${todo.isCompleted}">${todo.text}</li>`)
      .join('');
    this.$target.innerHTML = `<ul class="todoUl">${htmlString}</ul>`;
  };

  this.render();
}

export default TodoList;
