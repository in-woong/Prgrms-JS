import TodoItem from './TodoItem.js';
import { TODO_ERROR_TYPE } from '../declares/enums.js';
import ErrorMessageUtil from '../utils/ErrorMessageUtil.js';

class TodoList {
  constructor(targetId, data) {
    this.data = data;
    this.$targetDom = document.getElementById(targetId);
  }

  validateData(data) {
    if (!data || !Array.isArray(data)) {
      throw new Error(
        ErrorMessageUtil.getTodoItemErrorMessage(TODO_ERROR_TYPE.INVALID_DATA)
      );
    }
    return data;
  }

  setState(nextData) {
    const needRender = !Object.is(this.data, nextData);

    if (needRender) {
      this.data = nextData;
      this.render();
    }
  }

  render() {
    const data = this.validateData(this.data);
    // this.$targetDom.innerHTML = '';
    const $listWrapper = document.createElement('ul');
    const todoItemsFragement = document.createDocumentFragment();
    $listWrapper.className = 'todo-list';
    data.forEach((todoItem) => TodoItem(todoItemsFragement, todoItem));
    $listWrapper.appendChild(todoItemsFragement);
    this.$targetDom.appendChild($listWrapper);
  }
}

export default TodoList;
