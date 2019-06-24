const REMOVE_BTN_CLASS_NAME = "remove-todo_btn";
const TODO_ITEM_CLASS_NAME = "todo-item";

function TodoList($target, onToggle, onRemove) {
  this.$target = $target;
  this.onToggle = onToggle;
  this.onRemove = onRemove;

  this.init = function() {
    $target.addEventListener("click", function(e) {
      const id = parseInt(e.target.closest("li").dataset.id, 10);
      switch(e.target.className) {
        case REMOVE_BTN_CLASS_NAME:
          this.onRemove(id);
          break;
        default:
          this.onToggle(id);
          break;
      }
    }.bind(this));
  };

  this.render = function(data) {
    const htmlString = data.map(function(todo, idx) {
      let todoItemString = todo.isCompleted ? `<strike>${todo.text}</strike>` : todo.text;
      return `
        <li data-id=${idx} class="${TODO_ITEM_CLASS_NAME}">
          ${todoItemString}
          <button class="${REMOVE_BTN_CLASS_NAME}">x</button>
        </li>
      `;
    });

    $target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  };

  this.init();
}
