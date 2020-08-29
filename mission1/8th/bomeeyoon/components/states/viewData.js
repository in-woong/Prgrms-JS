export function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = [
        {
          id: 1,
          text: 'JS 공부하기',
          isCompleted: true,
        },
        {
          id: 2,
          text: 'JS 복습하기',
          isCompleted: false,
        },
      ];
      res(data);
    }, 300);
  });
}
