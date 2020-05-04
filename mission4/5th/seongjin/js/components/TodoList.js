import { $ } from "../util/index.js";
import { checkError } from "../validation/index.js";
import { SELECTOR } from "../constants/index.js";

export default function TodoList(todos, onDeleteClick, onToggleClick) {
  checkError.isInvalidInstance(this, TodoList);
  this.todos = todos;
  this.$target = $(SELECTOR.TODO_LIST);
  this.onDeleteClick = onDeleteClick;
  this.onToggleClick = onToggleClick;

  this.setState = nextData => {
    this.todos = nextData;
    this.render();
  };

  this.onClick = e => {
    const $target = e.target.nodeName;
    const _id = e.target.id;
    if ($target === "STRIKE" || $target === "LI") {
      this.onToggleClick(_id);
    } else if ($target === "BUTTON") {
      this.onDeleteClick(_id);
    }
  };

  this.render = () => {
    const innerText = this.todos.reduce((htmlString, currentValue) => {
      const { content, isCompleted, _id } = currentValue;
      const todo = isCompleted
        ? `<li id=${_id}>${content}<button id=${_id} class="delete-btn">삭제</button></li>`
        : `<li><strike id=${_id}>${content}</strike><button id=${_id} class="delete-btn">삭제</button></li>`;
      htmlString += todo;
      return `${htmlString}`;
    }, "");
    this.$target.innerHTML = `<ul>${innerText}</ul>`;
    this.$target.addEventListener("click", this.onClick);
  };
}
