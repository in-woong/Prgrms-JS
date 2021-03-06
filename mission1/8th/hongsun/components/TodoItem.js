import { TODO_ERROR_TYPE } from '../declares/enums.js';
import ErrorMessageUtil from '../utils/ErrorMessageUtil.js';

const hasRequiredProperty = (obj) => {
  if (!obj.hasOwnProperty('text')) {
    return false;
  }
  if (!obj.hasOwnProperty('isCompleted')) {
    return false;
  }
  return true;
};
const hasValidPropertyType = (obj) => {
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
    if (!hasRequiredProperty(data)) {
      throw new Error(
        ErrorMessageUtil.getTodoItemErrorMessage(
          TODO_ERROR_TYPE.REQUIRED_PROPERTY
        )
      );
    }
    if (!hasValidPropertyType(data)) {
      throw new Error(
        ErrorMessageUtil.getTodoItemErrorMessage(
          TODO_ERROR_TYPE.INVALID_PROPERTY
        )
      );
    }
  };

  const getTextNode = () => {
    const { text, isCompleted } = data;
    const textNode = document.createTextNode(text);
    if (isCompleted) {
      const textEl = document.createElement('s');
      textEl.appendChild(textNode);
      return textEl;
    }
    return textNode;
  };

  const getItem = () => {
    const itemEl = document.createElement('li');
    const text = getTextNode();
    itemEl.className = 'todo-item';
    itemEl.appendChild(text);
    return itemEl;
  };

  const render = () => {
    validateData();
    const item = getItem();
    $targetDom.appendChild(item);
  };

  render();
};

export default TodoItem;
