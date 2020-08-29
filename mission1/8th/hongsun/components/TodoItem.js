import { ERROR_TYPE } from '../declares/enums.js';
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
  const validateData = (data) => {
    if (!checkRequiredProperty(data)) {
      throw new Error(
        ErrorMessageUtil.getTodoItemErrorMessage(ERROR_TYPE.REQUIRED_PROPERTY)
      );
    }
    if (!checkValidPropertyType(data)) {
      throw new Error(
        ErrorMessageUtil.getTodoItemErrorMessage(ERROR_TYPE.INVALID_PROPERTY)
      );
    }
    return data;
  };
  const itemData = validateData(data);

  const render = (data) => {
    const $item = document.createElement('li');
    $item.className = 'todo-item';
    $item.textContent = data.text;
    $targetDom.appendChild($item);
  };
  render(itemData);
};

export default TodoItem;
