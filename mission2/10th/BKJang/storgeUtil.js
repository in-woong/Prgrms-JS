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
  const plainData = window.localStorage.getItem(key);

  if (!plainData) return [];

  const decodedData = isEncoded ? decode(plainData) : plainData;

  return JSON.parse(decodedData);
};

export const setItem = (
  key,
  value,
  isEncoded = true,
) => {
  const stringifiedData = isEncoded
    ? encode(JSON.stringify(value))
    : JSON.stringify(value);

  if (!window.localStorage) return;

  window.localStorage.setItem(key, stringifiedData);
};
