export default class TodoInput {
  constructor($input, $button, $removeButton) {
    this.$input = $input;
    this.$button = $button;
    this.$removeButton = $removeButton;
    this.todo = null;
  }

  init(addTodo, removeAll) {
    this.$button.addEventListener("click", () => {
      const todoText = this.$input.value;

      if (todoText.length > 0) {
        addTodo({
          text: todoText,
          isCompleted: true,
        });
        this.$input.value = '';
      }
    });

    this.$removeButton.addEventListener("click", () => {
      removeAll();
    });

  }
}