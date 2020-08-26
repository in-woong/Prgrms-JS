export function isValidHistoryList(historyList) {
  if (!Array.isArray(historyList)) {
    return false;
  }
  return historyList.every((history) => typeof history === 'string');
}

export const debounce = (func, delayTime = 750) => {
  let timeout;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), delayTime);
  };
};
