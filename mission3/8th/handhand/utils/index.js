
const debounce = (callback, timeout) => {
  let timer = null;
  
  const debouncedCallback = (...params) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback(...params), timeout);
  }

  return debouncedCallback;
};

export { debounce };
