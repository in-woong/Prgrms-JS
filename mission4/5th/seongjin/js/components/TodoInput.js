import { $ } from "../util/index.js";
import { checkError } from "../validation/index.js";
import { ENTER_KEY } from "../constants/index.js";
import { SELECTOR } from "../constants/index.js";

export default function TodoInput(onAddClick) {
  checkError.isInvalidInstance(this, TodoInput);
  this.onAddClick = onAddClick;
  this.$todoList = $(SELECTOR.TODO_LIST);
  this.$todoInput = $(SELECTOR.TODO_INPUT);
  this.$addBtn = $(SELECTOR.ADD_BUTTON);

  this.addTodo = () => {
    const input = this.$todoInput.value;
    checkError.isEmptyText(input);
    const newTodo = input;
    onAddClick(newTodo);
    this.$todoInput.value = "";
    this.$todoInput.focus();
  };

  this.$todoInput.addEventListener("keypress", event => {
    if (event.keyCode === ENTER_KEY) {
      this.addTodo();
    }
  });

  this.$addBtn.addEventListener("click", () => {
    this.addTodo();
  });
}
