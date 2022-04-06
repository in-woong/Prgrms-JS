export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    alert('저장에 실패했습니다.');
  }
};

export const getItem = (key, defaultValue) => {
  try {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }

    return defaultValue;
  } catch (e) {
    alert('데이터 로딩에 실패했습니다.');
    setItem(key, defaultValue);
    return defaultValue;
  }
};
