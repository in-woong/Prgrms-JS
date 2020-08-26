import { isValidData } from './utils.js';

const LOCAL_STORAGE_KEY = 'todo-data';

export function getDataFromLocalStorage() {
  try {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (isValidData(data)) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  return [];
}

export function setDataToLocalStorage(data) {
  if (!isValidData(data)) {
    throw new Error('wrong data');
  }
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}
