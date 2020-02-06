import validator from './validate.js';

function TodoCount(listTodos) {
  validator.isValidInstance(this, TodoCount)

  this.listTodos = listTodos;
  this.$countArea = document.querySelector('.count');

  this.getTotalCount = () => {
    return this.listTodos.length;
  }

  this.getCompletedCount = () => {
    return this.listTodos.filter(item => item.isCompleted).length;
  }

  this.render = () => {
    this.$countArea.innerText = `전체 : ${this.getTotalCount()}개, 완료 : ${this.getCompletedCount()}개`;
  }
}

export default TodoCount;