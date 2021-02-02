import TodoList from './TodoList.js';


const data = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기22',
      isCompleted: false,
    }
  ];
  
new TodoList(data, '#todo-list');