export function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const js = [
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
      const vue = [
        {
          id: 1,
          text: 'VUE 공부하기',
          isCompleted: false,
        },
        {
          id: 2,
          text: 'VUE 복습하기',
          isCompleted: false,
        },
      ];
      const react = [
        {
          id: 1,
          text: 'REACT 공부하기',
          isCompleted: true,
        },
        {
          id: 2,
          text: 'REACT 복습하기',
          isCompleted: false,
        },
      ];
      const typescript = [];
      res({ js, vue, react, typescript });
    }, 300);
  });
}
