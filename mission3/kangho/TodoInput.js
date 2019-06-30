export default class TodoInput {
  constructor($input, $form, $removeButton) {
    this.$input = $input;
    this.$form= $form;
    this.$removeButton = $removeButton;
    this.todo = null;

    this.init();
  }

  init() {
    this.$form.addEventListener("submit", (e) => {
      const todoText = this.$input.value;
      e.preventDefault();
      if (todoText.length > 0) {
        this.$form.dispatchEvent(new CustomEvent('addTodo', {
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
      this.$removeButton.dispatchEvent(new CustomEvent('removeAllTodo', 
        {
          bubbles: true,
        })
      );
    });

  }
}