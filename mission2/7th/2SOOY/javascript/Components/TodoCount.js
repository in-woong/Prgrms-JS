import { checkTarget, checkPNode } from '../utils/validator.js';

function TodoCount($target, todos) {
  this.init = () => {
    checkTarget($target);
    checkPNode($target);
    this.$target = $target;

    this.todos = todos;

    this.render();
  };

  this.render = () => {
    const totalTodoNumber = this.todos.length;
    const completedTodoNumber = this.todos.filter((todo) => todo.isCompleted)
      .length;

    this.$target.innerHTML = `COMPLETED : ${completedTodoNumber} / TOTAL : ${totalTodoNumber}`;
  };

  this.setState = (nextTodos) => {
    this.todos = nextTodos;
    this.render();
  };

  this.init();
}

export default TodoCount;
