export default function useDebounceFunction(callback, waitTime) {
  let timeoutId = 0;

  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(callback, waitTime, ...args);
  };
}
