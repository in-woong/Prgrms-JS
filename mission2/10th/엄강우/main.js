const data = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ]
  const myMonthData = [
    {
      text: '알고리즘 꾸준히 풀기',
      isCompleted: false,
    },
    {
      text: 'JS 공부하기',
      isCompleted: false,
    },
  ]
  const myYearData = [
    {
      text: '취업하기',
      isCompleted: false,
    }
  ]
  
  new TodoList(document.querySelector('#todo-list'), data)
  new TodoList(document.querySelector('#month-todo-list'), myMonthData)
  new TodoList(document.querySelector('#year-todo-list'), myYearData)