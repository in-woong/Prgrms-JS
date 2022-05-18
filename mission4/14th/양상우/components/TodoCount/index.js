import { createEl } from '../../util/createEl.js';

export function TodoCount({ $target, initialState }) {
  if (!new.target) {
    throw new Error('TodoCount is not allowed to be instantiated directly');
  }

  this.state = initialState;

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render = function () {
    $target.querySelector('.todo-count')?.remove();

    this.$todoCountEl = createEl('div', 'todo-count');
    $target.appendChild(this.$todoCountEl);

    const markup = this.generateMarkup();
    this.$todoCountEl.insertAdjacentHTML('afterbegin', markup);
  };

  this.generateMarkup = function () {
    return `
    <div>총 Todo : ${this.state.length}</div>
    <div>완료된 Todo :${
      this.state.filter((todo) => todo.isCompleted).length
    } </div>
  `;
  };

  this.render();
}
