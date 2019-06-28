export default class TodoInput {
  constructor($input, $button) {
    this.$input = $input;
    this.$button = $button;
    this.todo = null;
  }

  init(fn) {
    this.$button.addEventListener("click", () => {
      const todoText = this.$input.value;

      if (todoText.length > 0) {
        fn({
          text: todoText,
          isCompleted: false,
        });
        this.$input.value = '';
      }
    });

  }
}