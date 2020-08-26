import { FETCH_URL, DEBOUNCE_DELAY_TIME } from './constantKeys.js';

export const fetchData = async (newKeyword) => {
  if (!newKeyword) {
    return false;
  }
  const response = await fetch(`${FETCH_URL}?text=${newKeyword}`);
  if (response.status !== 200) {
    throw new Error('error: response status failed');
  }
  return await response.json();
};

export const debounce = (callback, delayTime = DEBOUNCE_DELAY_TIME) => {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      callback(...args);
    }, delayTime);
  };
};
