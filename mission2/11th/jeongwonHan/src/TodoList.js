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

  this.todoClickHandler = (e) => {
    if (!e.target.nodeName === 'LI') return;
    this.onCompleteToggle(Number(e.target.id));
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render = function () {
    const htmlString = this.state
      .map((todo) => `<li id=${todo.id} class="complete_${todo.isCompleted}">${todo.text}</li>`)
      .join('');
    this.$target.innerHTML = `<ul class="todoUl">${htmlString}</ul>`;
  };

  this.render();

  this.$target.addEventListener('click', (e) => {
    this.todoClickHandler(e);
  });
}

export default TodoList;
