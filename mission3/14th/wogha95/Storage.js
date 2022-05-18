import { loadStateError, saveStateError } from "./Error.js";

const localStorageKey = 'jjal-history';

export const loadState = () => {
try {
    const state = localStorage.getItem(localStorageKey);
    if(state !== null) return JSON.parse(state);  
  } catch (error) {
    alert(loadStateError);
    console.log(error);
    localStorage.setItem(localStorageKey, JSON.stringify([]));
  }
}

export const saveState = (state) => {
  try {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  } catch (error) {
    alert(saveStateError);
    console.log(error);
  }
}