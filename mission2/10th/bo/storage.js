const getData = (key) => {
  try {
    const data = JSON.parse(window.localStorage.getItem(key));
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

const setData = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e.message);
  }
};
