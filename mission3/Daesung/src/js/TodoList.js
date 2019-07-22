function TodoList($target, data) {
  this.$target = $target;
  this.data = data;
  // console.log(this.data);

  this.init = () => {
    $target.addEventListener("click", event => {
      const targetId = Number(event.target.closest("li").dataset.id);

      if (event.target.className === "removeButton") {
        this.removeTodo(targetId);
      } else {
        // clicked checkbox or text
        this.toggleTodo(targetId);
      }
    });
  };

  this.removeTodo = todoId => {
    delete this.data[todoId];
    this.setState(this.data);
  };

  this.removeAllTodo = () => {
    this.data = {};
    this.setState(this.data);
  };

  this.toggleTodo = todoId => {
    this.data[todoId].isCompleted = !this.data[todoId].isCompleted;
    this.setState(this.data);
  };

  this.countTodo = () => {
    return this.data.length;
  };

  this.setState = data => {
    this.data = data;
    this.render();
  };

  this.render = () => {
    const REMOVE_BTN_TEXT = "remove";

    const htmlString = Object.values(this.data).map(function(todo) {
      return `<li data-id=${todo.id}>
                <input type="checkbox" ${todo.isCompleted ? "checked" : ""}>
                <span>${
                  todo.isCompleted ? `(완료) <s>${todo.text}</s>` : todo.text
                }</span>          
                <button class="removeButton">${REMOVE_BTN_TEXT}</button>
              </li>`;
    });

    $target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  };

  this.init();
  this.render();
}
