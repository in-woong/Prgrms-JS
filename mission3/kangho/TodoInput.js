export default class TodoInput {
  constructor($input, $button, $removeButton) {
    this.$input = $input;
    this.$button = $button;
    this.$removeButton = $removeButton;
    this.todo = null;
  }

  init() {
    this.$button.addEventListener("click", () => {
      const todoText = this.$input.value;

      if (todoText.length > 0) {
        this.$button.dispatchEvent(new CustomEvent('addTodo', {
          bubbles: true,
          detail: { 
            todo: {
              text: this.$input.value,
              isCompleted: false,
            }
          }
        }));
        this.$input.value = '';
      }
    });

    this.$removeButton.addEventListener("click", () => {
      this.$removeButton.dispatchEvent(new CustomEvent('removeAll', 
        {
          bubbles: true,
        })
      );
    });

  }
}