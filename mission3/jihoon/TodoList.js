function TodoList($target, data) {
  this.$target = $target;
  this.data = data;

  this.init = function() {
    $target.addEventListener("click", function(e) {
      const id = parseInt(e.target.closest("li").dataset.id, 10);
      switch(e.target.className) {
        case 'remove-todo-btn':
          this.remove(id);
          break;
        default:
          this.toggle(id);
      }
    }.bind(this));
  };

  this.setState = function(data) {
    this.data = data;
    this.render();
  };

  this.render = function() {
    const htmlString = this.data.map(function(todo, idx) {
      let todoItemString = todo.isCompleted ? `<strike>${todo.text}</strike>` : todo.text;
      return `
        <li data-id=${idx} class="todo-item">
          ${todoItemString}
          <button class="remove-todo-btn">x</button>
        </li>
      `;
    });

    $target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  };

  this.remove = function(id) {
    if (this.data.length <= id || id < 0) {
      throw new Error('Out of bound access');
    }
    id === 0 ? this.data.shift() : this.data.splice(id, 1);
    this.setState(this.data);
  };

  this.toggle = function(id) {
    if (this.data.length <= id || id < 0) {
      throw new Error('Out of bound access');
    }
    this.data[id].isCompleted = !this.data[id].isCompleted;
    this.setState(this.data);
  };

  this.init();
  this.render();
}
