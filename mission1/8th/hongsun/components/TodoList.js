class TodoList {
  constructor(data) {
    this.data = data;
    this.rootRenderId = 'todo-list';
  }

  setTodoItem() {
    return this.data.map((todoItem) => `<div>${todoItem.text}</div>`);
  }

  render() {
    const todoItems = this.setTodoItem(this.data);
    const targetDom = document.getElementById(this.rootRenderId);
    targetDom.innerHTML = todoItems.join('');
  }
}
