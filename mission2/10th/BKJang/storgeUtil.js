import { ERROR_GET_ITEM_IN_LOCALSTORAGE, ERROR_SET_ITEM_IN_LOCALSTORAGE } from './constants.js';

const encode = value => {
  if (!window.btoa || !window.encodeURIComponent) return '';

  return window.btoa(window.encodeURIComponent(value));
};

const decode = encoded => {
  if (!window.atob || !window.decodeURIComponent) return '';

  return window.decodeURIComponent(window.atob(encoded));
};

export const getItem = (
  key,
  isEncoded = true,
) => {
  try {
    const plainData = window.localStorage.getItem(key);

    if (!plainData) return [];

    const decodedData = isEncoded ? decode(plainData) : plainData;

    return JSON.parse(decodedData);
  } catch (error) {
    console.error(ERROR_GET_ITEM_IN_LOCALSTORAGE, error);
  }
};

export const setItem = (
  key,
  value,
  isEncoded = true,
) => {
  try {
    const stringifiedData = isEncoded
      ? encode(JSON.stringify(value))
      : JSON.stringify(value);

    window.localStorage.setItem(key, stringifiedData);
  } catch (error) {
    console.error(ERROR_SET_ITEM_IN_LOCALSTORAGE, error);
  }
};
