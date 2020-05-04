import { $ } from "../util/index.js";
import { checkError } from "../validation/index.js";
import { SELECTOR } from "../constants/index.js";

export default function TodoCount(getTotalCount, getCompletedCount) {
  checkError.isInvalidInstance(this, TodoCount);
  this.getTotalCount = getTotalCount;
  this.getCompletedCount = getCompletedCount;
  this.$target = $(SELECTOR.TODO_COUNT);

  this.setState = nextData => {
    this.todos = nextData;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `모든 할 일 : ${this.getTotalCount()} 완료된 할 일 :${this.getCompletedCount()}`;
  };
}
