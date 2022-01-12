const $ = (selector, scope = document) => scope.querySelector(selector);

const ZERO = 0;

const isEmptyArray = (array) => {
  return array.length === ZERO;
};
