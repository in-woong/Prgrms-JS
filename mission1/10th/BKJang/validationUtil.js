import {
  ERROR_IS_NULL,
  ERROR_IS_ARRAY,
  ERROR_IS_CORRECT,
  ERROR_IS_NEW_KEYWORD,
} from './constants.js';

// undefined나 null 체크
const isNotNull = todos => {
  if (!todos) {
    throw new Error(ERROR_IS_NULL);
  }
}

// 배열 체크
const isArray = todos => {
  if (!Array.isArray(todos)) {
    throw new Error(ERROR_IS_ARRAY);
  }
}

// TodoList의 각 항목 데이터가 올바른지 체크
const isCorrectData = todos => {
  const isFalsyData = todos.some(todo => {
    return typeof todo.text !== 'string' || typeof todo.isCompleted !== 'boolean'
  });

  if (isFalsyData) {
    throw new Error(ERROR_IS_CORRECT);
  }
}

// new 키워드 체크
export const checkUseNewKeyword = context => {
  if (!context || context === window) {
    throw new Error(ERROR_IS_NEW_KEYWORD);
  }
  return true;
}

export const checkDataValidation = (todos, context) => {
  isNotNull(todos);
  isArray(todos);
  isCorrectData(todos);
  return true;
}
