import { MESSAGE } from './constant.js';

export const checkTarget = ($target) => {
  if (!$target) {
    throwError(MESSAGE.IS_NOT_TARGET);
  }
};
export const checkMainNode = ($target) => {
  if ($target.nodeName !== 'MAIN') {
    throwError(MESSAGE.IS_NOT_MAIN_NODE);
  }
};

export const checkDivNode = ($target) => {
  if ($target.nodeName !== 'DIV') {
    throwError(MESSAGE.IS_NOT_DIV_NODE);
  }
};

export const checkPNode = ($target) => {
  if ($target.nodeName !== 'P') {
    throwError(MESSAGE.IS_NOT_P_NODE);
  }
};

export const checkFormNode = ($target) => {
  if ($target.nodeName !== 'FORM') {
    throwError(MESSAGE.IS_NOT_MAIN_NODE);
  }
};

export const checkInputNode = ($target) => {
  if ($target.nodeName !== 'INPUT') {
    throwError(MESSAGE.IS_NOT_FORM_NODE);
  }
};

export const checkButtonNode = ($target) => {
  if ($target.nodeName !== 'BUTTON') {
    throwError(MESSAGE.IS_NOT_BUTTON_NODE);
  }
};

export const checkTypeArray = (data) => {
  if (!Array.isArray(data)) {
    throwError(MESSAGE.IS_NOT_ARRAY);
  }
};

export const checkTypeFunction = (func) => {
  if (!func || typeof func !== 'function') {
    throwError(MESSAGE.IS_NOT_FUNCTION);
  }
};

export const checkTodoProperties = (todos) => {
  if (
    !todos.every(
      (todo) => todo.hasOwnProperty('id') && typeof todo.id === 'string'
    )
  ) {
    throwError(MESSAGE.NOT_ID_PROPERTY);
  }

  if (
    !todos.every(
      (todo) => todo.hasOwnProperty('text') && typeof todo.text === 'string'
    )
  ) {
    throwError(MESSAGE.NOT_TEXT_PROPERTY);
  }

  if (
    !todos.every(
      (todo) =>
        todo.hasOwnProperty('isCompleted') &&
        typeof todo.isCompleted === 'boolean'
    )
  ) {
    throwError(MESSAGE.NOT_IS_COMPLETED_PROPERTY);
  }
};

const throwError = (message) => {
  throw new Error(message);
};
