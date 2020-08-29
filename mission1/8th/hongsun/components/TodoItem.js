import { TODO_ERROR_TYPE } from '../declares/enums.js';
import ErrorMessageUtil from '../utils/ErrorMessageUtil.js';

const checkRequiredProperty = (obj) => {
  if (!obj.hasOwnProperty('text')) {
    return false;
  }
  if (!obj.hasOwnProperty('isCompleted')) {
    return false;
  }
  return true;
};
const checkValidPropertyType = (obj) => {
  if (typeof obj.text !== 'string') {
    return false;
  }
  if (typeof obj.isCompleted !== 'boolean') {
    return false;
  }
  return true;
};

const TodoItem = ($targetDom, data) => {
  const validateData = () => {
    if (!checkRequiredProperty(data)) {
      throw new Error(
        ErrorMessageUtil.getTodoItemErrorMessage(
          TODO_ERROR_TYPE.REQUIRED_PROPERTY
        )
      );
    }
    if (!checkValidPropertyType(data)) {
      throw new Error(
        ErrorMessageUtil.getTodoItemErrorMessage(
          TODO_ERROR_TYPE.INVALID_PROPERTY
        )
      );
    }
  };

  const setTextNode = () => {
    const { text, isCompleted } = data;
    const textNode = document.createTextNode(text);
    if (isCompleted) {
      const $textEl = document.createElement('s');
      $textEl.appendChild(textNode);
      return $textEl;
    }
    return textNode;
  };

  const setItem = () => {
    const itemEl = document.createElement('li');
    const text = setTextNode();
    itemEl.className = 'todo-item';
    itemEl.appendChild(text);
    return itemEl;
  };

  const render = () => {
    validateData();
    const item = setItem();
    $targetDom.appendChild(item);
  };
  render();
};

export default TodoItem;
