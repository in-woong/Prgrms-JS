const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const saveLocalStorage = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data))
};

export {
  getLocalStorage,
  saveLocalStorage
}
