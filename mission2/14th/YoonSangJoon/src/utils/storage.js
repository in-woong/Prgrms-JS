const setStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error('저장 실패');
  }
};

const getStorage = (key, defaultResult = []) => {
  try {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : defaultResult;
  } catch (error) {
    throw new Error('불러오기 실패');
  }
};

export { setStorage, getStorage };
