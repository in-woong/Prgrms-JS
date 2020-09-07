
function TodoCount({ $target, totalTodoCount, doneTodoCount }) {
  this.$target = $target;
  this.totalTodo = totalTodoCount;
  this.doneTodo = doneTodoCount;

  this.$todoCount = document.createElement('div');
  this.$total = document.createElement('div');
  this.$done = document.createElement('div');

  this.$todoCount.append(this.$total);
  this.$todoCount.append(this.$done);
  this.$target.append(this.$todoCount);

  this.render();
}

TodoCount.prototype.render = function() {
  this.$total.innerHTML = `할일 전체: ${this.totalTodo()}`;
  this.$done.innerHTML = `다한 일: ${this.doneTodo()}`;
}

export default TodoCount;
