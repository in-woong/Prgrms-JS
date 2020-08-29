import TodoItem from './TodoItem.js';
import { ERROR_TYPE } from '../declares/enums.js';
import ErrorMessageUtil from '../utils/ErrorMessageUtil.js';

class TodoList {
  constructor(targetId, data) {
    this.data = data;
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

  setState(nextData) {
    const canRender = Object.is(this.data, nextData);

    if (!canRender) {
      this.data = nextData;
      this.render();
    }
  }

  render() {
    const data = this.validateData(this.data);
    this.$targetDom.innerHTML = '';
    const $listWrapper = document.createElement('ul');
    $listWrapper.className = 'todo-list';
    data.forEach((todoItem) => TodoItem($listWrapper, todoItem));
    this.$targetDom.appendChild($listWrapper);
  }
}

export default TodoList;
