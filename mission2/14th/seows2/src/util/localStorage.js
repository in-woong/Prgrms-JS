const getLocalStorage = (key) => {
  const value = localStorage.getItem(key);

  return JSON.parse(value) ?? [];
};

const setLocalStorage = (key, value) => {
  const toJson = JSON.stringify(value);

  localStorage.setItem(key, toJson);
};

export { getLocalStorage, setLocalStorage };
