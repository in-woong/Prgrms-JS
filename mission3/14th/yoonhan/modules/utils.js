export function debounce(func, delay = 300) {
  let timeoutId = undefined;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);
      func(...args);
    }, delay);
  };
}
