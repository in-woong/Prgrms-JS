import { checkTarget, checkNode, checkTodoCounts } from '../utils/validator.js';
import { NODE } from '../utils/constant.js';

function TodoCount({ $target, todoCounts }) {
  this.init = () => {
    checkTarget($target);
    checkNode(NODE.P);
    checkTodoCounts(todoCounts);

    this.$target = $target;
    this.totalCount = todoCounts.total;
    this.completedCount = todoCounts.completed;

    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `total : ${this.totalCount} completed : ${this.completedCount}`;
  };

  this.setState = (nextState) => {
    this.totalCount = nextState.total;
    this.completedCount = nextState.completed;

    this.render();
  };

  this.init();
}

export default TodoCount;
