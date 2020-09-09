export default class TodoItem {
  constructor(targetEl, data, onRemove) {
    this.targetEl = targetEl;
    this.data = data;
    this.onRemove = onRemove;

    try {
      this.validateData();
      this.render();
    } catch (error) {
      console.log(error);
    }
  }

  validateData() {
    if (typeof this.data.id !== 'number' || !this.data.id) {
      throw new Error('Invalid id data');
    }
    if (typeof this.data.text !== 'string' || this.data.text === '') {
      throw new Error('Invalid text data');
    }
    if (typeof this.data.isCompleted !== 'boolean') {
      throw new Error('Invalid isCompleted type');
    }
  }

  getTodoDeleteButton() {
    const deleteButtonEl = document.createElement('button');
    deleteButtonEl.setAttribute('type', 'button');
    deleteButtonEl.textContent = '삭제';
    deleteButtonEl.style.cursor = 'pointer';
    deleteButtonEl.addEventListener('click', this.onRemove);
    return deleteButtonEl;
  }

  getTodoItemElement() {
    const itemEl = document.createElement('li');
    itemEl.setAttribute('data-id', this.data.id);
    itemEl.style.cursor = 'pointer';
    const deleteButtonEl = this.getTodoDeleteButton();
    const isCompleted = this.data.isCompleted;
    const textContent = document.createTextNode(this.data.text);
    if (isCompleted) {
      const textEl = document.createElement('s');
      textEl.appendChild(textContent);
      itemEl.appendChild(textEl);
      itemEl.appendChild(deleteButtonEl);
      return itemEl;
    }
    itemEl.appendChild(textContent);
    itemEl.appendChild(deleteButtonEl);
    return itemEl;
  }

  render() {
    const todoItem = this.getTodoItemElement(this.data);
    this.targetEl.appendChild(todoItem);
  }
}
