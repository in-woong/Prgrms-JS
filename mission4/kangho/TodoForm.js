export default class TodoForm {
  constructor($input, $form) {
    this.$input = $input;
    this.$form= $form;
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
              content: this.$input.value,
              isCompleted: false,
            }
          }
        }));
        this.$input.value = '';
      }
    });

    this.$input.addEventListener("keyup", (e) => {
      const todoText = this.$input.value;
      if (todoText.length > 0) {
        this.$form.querySelector('[type=submit]').classList.remove('disabled');
      } else {
        this.$form.querySelector('[type=submit]').classList.add('disabled');
      }
    })
  }
}