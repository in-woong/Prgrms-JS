import { isValidParameter } from './utils.js';

const storage = {
  getItem({ storageKeyName, defaultValue }) {
    try {
      const existedTodos = localStorage.getItem(storageKeyName);
      if (existedTodos) {
        return JSON.parse(existedTodos);
      }

      return defaultValue;
    } catch (error) {
      return defaultValue;
    }
  },
  setItem({ storageKeyName, newState }) {
    try {
      isValidParameter(newState);

      localStorage.setItem(storageKeyName, JSON.stringify(newState));
    } catch (error) {
      alert(error.message);
    }
  },
};

export default storage;
