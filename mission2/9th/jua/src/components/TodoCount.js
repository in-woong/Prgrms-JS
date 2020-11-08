import { checkNewKeyword, checkTarget } from '../validation.js';

export default function TodoCount($todoCount) {
  this.validation = () => {
    checkNewKeyword(this);
    checkTarget($todoCount);
  };

  this.validation();
  this.$todoCount = $todoCount;

  this.render = () => {
    this.$todoCount.innerHTML = `완료된 개수: ${this.completedCount} / ${this.totalCount}`;
  };

  this.setState = (totalCount, completedCount) => {
    this.totalCount = totalCount;
    this.completedCount = completedCount;
    this.render();
  };

  this.render();
}
