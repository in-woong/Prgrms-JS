class TodoList {
  constructor(data) {
    this.data = this.validateListData(data);
    this.rootRenderId = 'todo-list';
  }

  validateListData(data) {
    if (!data || !Array.isArray(data)) {
      throw new Error('Data must be of Array type');
    }
    if (!data.every((todoItem) => todoItem.hasOwnProperty('text'))) {
      throw new Error('Does not have a "text" property');
    }
    if (!data.every((todoItem) => typeof todoItem.text === 'string')) {
      throw new Error('Invalid type "text" property');
    }
    return data;
  }

  setTodoItem() {
    const filterData = this.data.filter((todoitem) => todoitem.text !== '');
    return filterData.map((todoItem) => `<div>${todoItem.text}</div>`);
  }

  render() {
    const todoItems = this.setTodoItem(this.data);
    const targetDom = document.getElementById(this.rootRenderId);
    targetDom.innerHTML = todoItems.join('');
  }
}
