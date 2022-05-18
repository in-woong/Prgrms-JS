import { DEBOUNCE_DELAY } from '../constant/index.js';

const debounce = (func, delay = DEBOUNCE_DELAY) => {
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

export default debounce;
