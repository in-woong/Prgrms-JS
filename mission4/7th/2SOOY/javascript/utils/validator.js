import { PROPERTY } from './constant.js';

export const checkTarget = ($target) => {
  if (!$target instanceof HTMLElement) {
    throw new Error(`HTML Element가 존재하지 않습니다.`);
  }
};

export const checkNode = ($target, nodeName) => {
  if ($target.nodeName !== nodeName) {
    throw new Error(`<${nodeName}>이(가) 아닙니다.`);
  }
};

export const checkTypeArray = (data) => {
  if (!Array.isArray(data)) {
    throw new Error(`type이 Array가 아닙니다.`);
  }
};

export const checkTypeFunction = (func) => {
  if (!func || typeof func !== 'function') {
    throw new Error(`type이 Function이 아닙니다.`);
  }
};

export const checkAppState = (state) => {
  // users
  if (!state.hasOwnProperty(PROPERTY.USERS)) {
    throw new Error(`${PROPERTY.USERS}가 존재하지 않습니다`);
  }
  // chosenUser
  if (!state.hasOwnProperty(PROPERTY.CHOSEN_USER)) {
    throw new Error(`${PROPERTY.CHOSEN_USER}가 존재하지 않습니다`);
  }
  // todos
  if (!state.hasOwnProperty(PROPERTY.TODOS)) {
    throw new Error(`${PROPERTY.TODOS}가 존재하지 않습니다`);
  }
  // todoCounts
  if (!state.hasOwnProperty(PROPERTY.TODO_COUNTS)) {
    throw new Error(`${PROPERTY.TODO_COUNTS}가 존재하지 않습니다`);
  }
};

export const checkTodos = (todos) => {
  todos.forEach((todo) => {
    // _id
    if (!todo.hasOwnProperty(PROPERTY.USER_ID)) {
      throw new Error(`${PROPERTY.USER_ID}가 존재하지 않습니다`);
    }
    // content
    if (!todo.hasOwnProperty(PROPERTY.CONTENT)) {
      throw new Error(`${PROPERTY.CONTENT}가 존재하지 않습니다`);
    }
    // isCompleted
    if (!todo.hasOwnProperty(PROPERTY.IS_COMPLETED)) {
      throw new Error(`${PROPERTY.IS_COMPLETED}가 존재하지 않습니다`);
    }
  });
};

export const checkTodoCounts = (todoCounts) => {
  // total
  if (!todoCounts.hasOwnProperty(PROPERTY.TOTAL_TODO_COUNT)) {
    throw new Error(`${PROPERTY.TOTAL_TODO_COUNT}가 존재하지 않습니다`);
  }
  // completed
  if (!todoCounts.hasOwnProperty(PROPERTY.COMPLETED_TODO_COUNT)) {
    throw new Error(`${PROPERTY.COMPLETED_TODO_COUNT}가 존재하지 않습니다`);
  }
};
