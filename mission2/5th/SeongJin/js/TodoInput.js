import errorCheck from "./errorCheck.js";

function TodoInput(addTodo) {
  this.addTodo = addTodo;

  this.$addButton = document.getElementById("add-btn");

  this.$addButton.addEventListener("click", () => {
    const $input = document.getElementById("new-todo");
    const newTodo = { text: $input.value, isCompleted: false };
    errorCheck.isEmptyText($input.value);
    this.addTodo(newTodo);
    $input.value = "";
    $input.focus();
  });
}

export default TodoInput;
