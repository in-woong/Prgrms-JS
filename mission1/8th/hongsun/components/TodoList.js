import TodoItem from './TodoItem.js';
import { ERROR_TYPE } from '../declares/enums.js';
import ErrorMessageUtil from '../utils/ErrorMessageUtil.js';

class TodoList {
  constructor(targetId, data) {
    this.data = this.validateData(data);
    this.$targetDom = document.getElementById(targetId);
  }

  validateData(data) {
    if (!data || !Array.isArray(data)) {
      throw new Error(
        ErrorMessageUtil.getTodoItemErrorMessage(ERROR_TYPE.INVALID_DATA)
      );
    }
    return data;
  }

  render() {
    const $listWrapper = document.createElement('ul');
    $listWrapper.className = 'todo-list';
    this.data.forEach((todoItem) => TodoItem($listWrapper, todoItem));
    this.$targetDom.appendChild($listWrapper);
  }
}

export default TodoList;
