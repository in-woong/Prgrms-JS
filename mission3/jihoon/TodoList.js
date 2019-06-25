function TodoList($target, onToggle, onRemove, onRemoveAll) {
  this.$target = $target;
  this.onToggle = onToggle;
  this.onRemove = onRemove;
  this.onRemoveAll = onRemoveAll;

  this.init = function() {
    $target.addEventListener("click", function(e) {
      const className = e.target.className;
      switch(className) {
        case REMOVE_ALL_BTN_CLASS_NAME:
          const removeAllEvent = new CustomEvent("removeAll", { bubbles: true });
          e.target.dispatchEvent(removeAllEvent);
          break;
        case REMOVE_BTN_CLASS_NAME:
          this.onRemove(parseInt(e.target.closest("li").dataset.idx, 10));
          break;
        case ITEM_CLASS_NAME:
        case COMPLETED_ITEM_CLASS_NAME:
          this.onToggle(parseInt(e.target.closest("li").dataset.idx, 10));
          break;
        default:
          throw new Error('Invalid Event triggered');
      }
    }.bind(this));

    $target.addEventListener("removeAll", () => this.onRemoveAll());
  };

  this.render = function(data) {
    const htmlString = data.map(function(todo, idx) {
      let todoItemString = todo.isCompleted ? `<strike class="${COMPLETED_ITEM_CLASS_NAME}">${todo.text}</strike>` : todo.text;
      return `
        <li data-idx=${idx} class="${ITEM_CLASS_NAME}">
          ${todoItemString}
          <button class="${REMOVE_BTN_CLASS_NAME}">x</button>
        </li>
      `;
    });
    const removeAllHTMLString = `
      <button type="button" class="${REMOVE_ALL_BTN_CLASS_NAME}"> Remove All </button>
    `;
    $target.innerHTML = `${removeAllHTMLString}<ul>${htmlString.join("")}</ul>`;
  };

  this.init();
}
