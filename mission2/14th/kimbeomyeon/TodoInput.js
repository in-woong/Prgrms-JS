function TodoInput({ $input, $button, todoList }) {
  this.$input = $input;
  this.$button = $button;

  this.addItem = function () {
    todoList.setState([
      ...todoList.state,
      { text: $input.value, isCompleted: false },
    ]);
  };

  this.$button.addEventListener('click', this.addItem);
}
