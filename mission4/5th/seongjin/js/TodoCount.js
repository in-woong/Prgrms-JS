import { $, errorCheck } from "./util.js";

export default function TodoCount(getTotalCount, getCompletedCount) {
  errorCheck.isInvalidInstance(this, TodoCount);
  this.getTotalCount = getTotalCount;
  this.getCompletedCount = getCompletedCount;
  this.$target = $("#todo-count");

  this.setState = nextData => {
    this.todos = nextData;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `모든 할 일 : ${this.getTotalCount()} 완료된 할 일 :${this.getCompletedCount()}`;
  };
}
