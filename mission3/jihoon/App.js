const ADD_TODO_BTN_CLASS_NAME = "add-todo-button";
const TODO_INPUT_CLASS_NAME = "todo-input";
const TODO_COUNT_CLASS_NAME = "todo-count"
const TODO_LIST_CLASS_NAME = "todo-list";

function App($target, data) {
  let initialized = false;

  this.data = data;
  this.todoInput = null;
  this.todoCount = null;
  this.todoList = null;

  this.init = function() {
    if (!initialized) {
      $target.innerHTML = `
        <input type="text" class="${TODO_INPUT_CLASS_NAME}"/>
        <button type="button" class="${ADD_TODO_BTN_CLASS_NAME}"> Add </button>
        <h3 class="${TODO_COUNT_CLASS_NAME}"></h3>
        <div class="${TODO_LIST_CLASS_NAME}"></div>
      `;

      this.todoInput = new TodoInput(
        document.querySelector(`.${TODO_INPUT_CLASS_NAME}`),
        document.querySelector(`.${ADD_TODO_BTN_CLASS_NAME}`),
        this.onSubmit.bind(this)
      );

      this.todoList = new TodoList(
        document.querySelector(`.${TODO_LIST_CLASS_NAME}`),
        this.onToggle.bind(this),
        this.onRemove.bind(this)
      );

      this.todoCount = new TodoCount(
        document.querySelector(`.${TODO_COUNT_CLASS_NAME}`)
      );

      this.todoList.render(this.data);
      this.todoCount.render(this.data);

      initialized = true;
    }
  };

  this.render = function() {
    if (!initialized) {
      this.init();
    } else {
      this.todoList.render(this.data);
      this.todoCount.render(this.data);
    }
  };

  this.onSubmit = function(text) {
    this.data.push({
      text,
      isCompleted: false
    });
    this.render();
  };

  this.onToggle = function(idx) {
    if (this.data.length <= idx || idx < 0) {
      throw new Error('Out of bound access');
    }
    this.data[idx].isCompleted = !this.data[idx].isCompleted;
    this.render();
  };

  this.onRemove = function(idx) {
    if (this.data.length <= idx || idx < 0) {
      throw new Error('Out of bound access');
    }
    this.data.splice(idx, 1);
    this.render();
  };

  this.render();
}
