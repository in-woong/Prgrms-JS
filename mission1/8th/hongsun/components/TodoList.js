import TodoItem from './TodoItem.js';
import { TODO_ERROR_TYPE } from '../declares/enums.js';
import ErrorMessageUtil from '../utils/ErrorMessageUtil.js';

class TodoList {
  constructor(targetId, data) {
    this.data = data;
    this.validateData();
    this.$targetDom = document.getElementById(targetId);
    this.render();
  }

  validateData() {
    if (!this.data || !Array.isArray(this.data)) {
      throw new Error(
        ErrorMessageUtil.getTodoItemErrorMessage(TODO_ERROR_TYPE.INVALID_DATA)
      );
    }
  }

  setState(nextData) {
    const needRender = !Object.is(this.data, nextData);

    if (needRender) {
      this.data = nextData;
      this.render();
    }
  }

  render() {
    this.$targetDom.innerHTML = '';

    const $listWrapper = document.createElement('ul');
    $listWrapper.className = 'todo-list';
    const todoItemsFragement = document.createDocumentFragment();

    this.data.forEach((todoItem) => TodoItem(todoItemsFragement, todoItem));
    $listWrapper.appendChild(todoItemsFragement);

    this.$targetDom.appendChild($listWrapper);
  }
}

export default TodoList;
