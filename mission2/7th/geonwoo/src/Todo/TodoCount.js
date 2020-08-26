'use strict';
export default function TodoCount(target, todoState) {
  this.$target = target;

  this.render = (todoState = []) => {
    this.$target.textContent = `전체: ${todoState.length}, 완료: ${
      todoState.filter((todo) => todo.isCompleted).length
    }`;
  };

  this.render(todoState);
}
