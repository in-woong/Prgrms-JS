export function isValidData(data) {
  if (!Array.isArray(data)) return false;
  return data.every((todo) => isValidTodo(todo));
}

export function preventDefaultEvent(event) {
  event.preventDefault();
}

export function isValidTodo(todo) {
  if (
    todo &&
    '_id' in todo &&
    typeof todo._id === 'string' &&
    'content' in todo &&
    typeof todo.content === 'string' &&
    'isCompleted' in todo &&
    typeof todo.isCompleted === 'boolean'
  )
    return true;

  return false;
}

export function isFunction(func) {
  return typeof func === 'function';
}

export const DEFAULT_USER_NAME = 'lettuce';

export const ENTER_KEY = 13;
