import { isValidData } from './utils.js';

function TodoCount($target, _data) {
  if (!(this instanceof TodoCount)) {
    throw new Error("Create instance with 'new'");
  }
  if (!isValidData(_data)) {
    throw new Error('wrong data');
  }
  this.$target = $target;
  this.data = _data;

  this.render = function () {
    const completeCount = this.data.filter((task) => task.isCompleted).length;
    this.$target.innerHTML = `
      <p>Completed task count : ${completeCount}</p>
      <p>Total task count : ${this.data.length}</p>
    `;
  };

  this.setState = function (nextData) {
    if (!isValidData(nextData)) {
      throw new Error('wrong nextData');
    }
    this.data = nextData;
    this.render();
  };

  this.render();
}

export default TodoCount;
