import { $ } from "./util.js";
import { errorCheck } from "./util.js";

export default function TodoInput(onAddClick) {
  errorCheck.isInvalidInstance(this, TodoInput);
  this.onAddClick = onAddClick;
  this.$todoList = $("#todo-list");
  this.$todoInput = $("#todo-input");
  this.$addBtn = $("#add-btn");

  this.addTodo = () => {
    const input = this.$todoInput.value;
    errorCheck.isEmptyText(input);
    const newTodo = input;
    onAddClick(newTodo);
    this.$todoInput.value = "";
    this.$todoInput.focus();
  };

  this.$todoInput.addEventListener("keypress", event => {
    if (event.keyCode === 13) {
      this.addTodo();
    }
  });

  this.$addBtn.addEventListener("click", () => {
    this.addTodo();
  });
}
