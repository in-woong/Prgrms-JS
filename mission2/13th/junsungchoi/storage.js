const defaultData = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
  {
    text: '프로그래머스 2주차 과제 풀기',
    isCompleted: false,
  },
  {
    text: '프로그래머스 2주차 세션 복습',
    isCompleted: false,
  }
];

export const storage = {
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e.message);
    }
  },
  getItem: (key) => {
    try {
      const storedValue = localStorage.getItem(key);

      if (storedValue) {
        return JSON.parse(storedValue);
      }

      return defaultData;
    } catch (e) {
      return defaultData;
    }
  },
}
