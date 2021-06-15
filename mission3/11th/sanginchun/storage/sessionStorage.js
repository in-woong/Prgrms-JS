export const getDataFromSessionStorage = function (key) {
  try {
    return JSON.parse(window.sessionStorage.getItem(key));
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const setDataToSessionStorage = function (key, data) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    window.sessionStorage.clear();
    window.sessionStorage.setItem(key, JSON.stringify(data));
  }
};
