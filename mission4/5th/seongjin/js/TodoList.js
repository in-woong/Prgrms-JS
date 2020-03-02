import { $ } from "./util.js";
import { errorCheck } from "./util.js";

export default function TodoList(todos, onDeleteClick, onToggleClick) {
  errorCheck.isInvalidInstance(this, TodoList);
  this.todos = todos;
  this.$target = $("#todo-list");
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
    const innerText = this.todos.reduce((acc, currentValue) => {
      const { content, isCompleted, _id } = currentValue;
      const todo = isCompleted
        ? `<li id=${_id}>${content}<button id=${_id} class="delete-btn">삭제</button></li>`
        : `<li><strike id=${_id}>${content}</strike><button id=${_id} class="delete-btn">삭제</button></li>`;
      acc += todo;
      return `${acc}`;
    }, "");
    this.$target.innerHTML = `<ul>${innerText}</ul>`;
    this.$target.addEventListener("click", this.onClick);
  };
}
