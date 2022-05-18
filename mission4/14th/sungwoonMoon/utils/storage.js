export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
};
export const getItem = (key, defaultValue) => {
  try {
    const value = localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : defaultValue;
  } catch (e) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }
};
