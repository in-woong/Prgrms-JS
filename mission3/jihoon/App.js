function App($target) {
  let initialized = false;

  this.data = null;
  this.todoInput = null;
  this.todoCount = null;
  this.todoList = null;

  this.fetch = function() {
    if (!window.localStorage) {
      this.data = data;
      return;
    }
    const dataFromLocalStorage = getItemFromLocalStorage(LOCAL_STORAGE_KEY);
    this.data = dataFromLocalStorage ? dataFromLocalStorage : data;
  };

  this.init = function() {
    if (!initialized) {
      $target.innerHTML = `
        <form>
          <input type="text" class="${TODO_INPUT_CLASS_NAME}"/>
          <button type="submit"> Add </button>
        </form>
        <h3 class="${TODO_COUNT_CLASS_NAME}"></h3>
        <div class="${TODO_LIST_CLASS_NAME}"></div>
      `;

      this.fetch();

      this.todoInput = new TodoInput(
        document.querySelector(`.${TODO_INPUT_CLASS_NAME}`),
        this.onSubmit.bind(this)
      );

      this.todoList = new TodoList(
        document.querySelector(`.${TODO_LIST_CLASS_NAME}`),
        this.onToggle.bind(this),
        this.onRemove.bind(this),
        this.onRemoveAll.bind(this)
      );

      this.todoCount = new TodoCount(
        document.querySelector(`.${TODO_COUNT_CLASS_NAME}`)
      );

      initialized = true;
    }
  };

  this.render = function() {
    if (!initialized) {
      this.init();
    }
    this.todoList.render(this.data);
    this.todoCount.render(this.data);
    setItemIntoLocalStorage(LOCAL_STORAGE_KEY, this.data);
  };

  this.onSubmit = function(text) {
    if (text.trim().length < 1) return;
    this.data.push({
      text,
      isCompleted: false
    });
    this.todoInput.reset();
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

  this.onRemoveAll = function() {
    this.data = [];
    this.render();
  };

  this.render();
}
