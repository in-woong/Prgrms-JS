import {
  ERROR_IS_FALSY,
  ERROR_IS_TARGET_ID_NULL,
  ERROR_IS_FALSY_JJALS,
  ERROR_IS_ARRAY,
  ERROR_IS_CORRECT,
  ERROR_IS_NEW_KEYWORD,
} from './constants.js';

// 배열 체크
const isArray = jjals => {
  if (!Array.isArray(jjals)) {
    throw new Error(ERROR_IS_ARRAY);
  }
}

// TodoList의 각 항목 데이터가 올바른지 체크
const isCorrectData = jjals => {
  const isFalsyData = jjals.some(jjal => {
    return typeof jjal.imageUrl !== 'string'
  });

  if (isFalsyData) {
    throw new Error(ERROR_IS_CORRECT);
  }
}

// Truthy한 데이터인지 검사 (undefined나 null 체크)
export const isTruthyData = (data, cutomErrorMessage = ERROR_IS_FALSY) => {
  if (!data) {
    throw new Error(cutomErrorMessage);
  }
  return true;
}

// new 키워드 체크
export const checkUseNewKeyword = context => {
  if (!context) {
    throw new Error(ERROR_IS_NEW_KEYWORD);
  }
  return true;
}

export const getTargetElement = targetElementId => {
  if (isTruthyData(targetElementId, ERROR_IS_TARGET_ID_NULL)) {
    const targetElement = document.querySelector(targetElementId);
    if (isTruthyData(targetElement)) {
      return targetElement;
    }
  }
}

export const checkDataValidation = jjals => {
  isTruthyData(jjals, ERROR_IS_FALSY_JJALS);
  isArray(jjals);
  isCorrectData(jjals);
  return true;
}
