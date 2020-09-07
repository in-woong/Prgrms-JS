
function TodoInput({ $target, addTodo }) {
  this.$target = $target;
  this.$input = document.createElement('input');
  this.$input.value = '';
  this.$addBtn = document.createElement('button');
  this.$addBtn.innerHTML = '할일 추가하기';
  this.$addBtn.addEventListener('click', () => {
    addTodo({
      text: this.$input.value,
      isCompleted: false,
      hash: this.hashCode(),
    });
    this.$input.value = '';
    this.$input.focus();
  });

  this.render();
}

TodoInput.prototype.render = function() {
  this.$target.append(this.$input);
  this.$target.append(this.$addBtn);
}

TodoInput.prototype.hashCode = function () {
  return Math.random().toString(36).slice(2, 12);
}

export default TodoInput;
