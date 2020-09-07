
function TodoInput({ $target, addTodo, removeAllTodo }) {
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

  this.$removeBtn = document.createElement('button');
  this.$removeBtn.innerHTML = '할일 모두 삭제하기';
  this.$removeBtn.addEventListener('removeAll', () => {
    removeAllTodo();
  });
  this.$removeBtn.addEventListener('click', () => {
    const event = new Event('removeAll');
    this.$removeBtn.dispatchEvent(event);
  });

  this.render();
}

TodoInput.prototype.render = function() {
  this.$target.append(this.$input);
  this.$input.after(this.$addBtn);
  this.$addBtn.after(this.$removeBtn);
}

TodoInput.prototype.hashCode = function () {
  return Math.random().toString(36).slice(2, 12);
}

export default TodoInput;
