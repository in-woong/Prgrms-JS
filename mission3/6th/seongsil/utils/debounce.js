import { DEBOUNCE_TIME } from './constant.js';

export const debounce = callback => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), DEBOUNCE_TIME);
  }
}
