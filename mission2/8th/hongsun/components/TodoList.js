import TodoItem from './TodoItem.js';

export default class TodoList {
  constructor(targetEl, data, onToggle, onRemove) {
    this.targetEl = targetEl;
    this.data = data;
    this.onToggle = onToggle;
    this.onRemove = onRemove;
    try {
      this.validateData();
      this.render();
    } catch (error) {
      console.log(error);
    }
  }

  validateData() {
    if (!Array.isArray(this.data)) {
      throw new Error('Invalid data type');
    }
  }
  getTodoListElement() {
    const todoListEl = document.createElement('ul');
    todoListEl.addEventListener('click', this.onToggle);
    return todoListEl;
  }
  setState(nextData) {
    const needRender = !Object.is(this.data, nextData);
    const prevData = this.data;

    if (needRender) {
      try {
        this.validateData();
        this.data = nextData;
        this.render();
      } catch (error) {
        console.log(error);
        this.data = prevData;
        this.render();
      }
    }
  }

  render() {
    const prevList = this.targetEl.querySelector('ul');
    prevList && prevList.remove();
    const todoList = this.getTodoListElement();
    this.data.map(
      (todoItem) => new TodoItem(todoList, todoItem, this.onRemove)
    );
    this.targetEl.appendChild(todoList);
  }
}
