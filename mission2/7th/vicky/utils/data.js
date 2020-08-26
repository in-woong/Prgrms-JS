// set list into vickyList(localStorage)
export const setStorageData = (key, newData) => {
  try {
    const list = localStorage.getItem('vickyList');
    const data = list ? JSON.parse(list) : {};
    data[key] = data[key] ? newData : [newData];

    localStorage.setItem('vickyList', JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

// get list into vickyList(localStorage)
export const getStorageData = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem('vickyList'));
    return data ? (data[key] ? data[key] : []) : [];
  } catch (error) {
    console.log(error);
  }
};
