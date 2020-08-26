export function isValidData(data) {
  if (!Array.isArray(data)) return false;
  return data.every((task) => isValidTask(task));
}

export function isValidTask(task) {
  if (
    task &&
    'text' in task &&
    typeof task.text === 'string' &&
    'isCompleted' in task &&
    typeof task.isCompleted === 'boolean'
  )
    return true;

  return false;
}

export function isFunction(func) {
  return typeof func === 'function';
}

export const ENTER_KEY = 13;
