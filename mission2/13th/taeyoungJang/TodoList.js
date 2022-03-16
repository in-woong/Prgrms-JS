import {
  isValidConstructor,
  isValidTarget,
  isValidParameter,
} from './utils.js';

function TodoList({ $target, initialState, onClickTodo, onDeleteTodo }) {
  this.state = [];

  isValidTarget($target);
  isValidConstructor.call(this, TodoList);
  isValidParameter(initialState);

  this.state = initialState;
  this.$target = $target;

  this.onClick = function (e) {
    if (
      e.target.classList.contains('todo') &&
      e.target instanceof HTMLLIElement
    ) {
      onClickTodo(e);
      return;
    }

    if (
      e.target.classList.contains('delete-btn') &&
      e.target instanceof HTMLButtonElement
    ) {
      onDeleteTodo(e);
      return;
    }
  };

  this.$target.addEventListener('click', this.onClick.bind(this));

  this.render = function () {
    const content = this.state.reduce((acc, cur, idx) => {
      return (
        acc +
        `<li data-index=${idx} class="${
          cur.isCompleted ? 'todo completed' : 'todo'
        }">
          ${cur.text}
          <button class="delete-btn">삭제</button>
        </li>`
      );
    }, '');
    this.$target.innerHTML = `<h1>TODO LIST</h1><ul>${content}</ul>`;
  };

  this.setState = function (newState) {
    isValidParameter(newState);

    this.state = newState;

    this.render();
  };

  this.render();
}

export default TodoList;
