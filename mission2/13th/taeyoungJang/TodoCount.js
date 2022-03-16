import {
  isValidConstructor,
  isValidParameter,
  isValidTarget,
} from './utils.js';

function TodoCount({ $target, initalState }) {
  this.state = [];

  isValidTarget($target);
  isValidConstructor.call(this, TodoCount);
  isValidParameter(initalState);

  this.$target = $target;
  this.state = initalState;

  this.render = function () {
    this.$target.innerHTML = `
        <div>총 할일 수: ${this.state.length}개</div>
        <div>완료된 할일 수: ${
          this.state.filter((todo) => todo.isCompleted).length
        }개</div>
    `;
  };

  this.setState = function (newState) {
    isValidParameter(newState);

    this.state = newState;

    this.render();
  };

  this.render();
}

export default TodoCount;
