import  TodoList  from './src/TodoList.js';
const data = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ];

  const todoList = new TodoList(data);
  
  todoList.render();

  //add new 
  const newData = [...data, {
    text: '새로운 todo',
    isCompleted: false,
  }]
  todoList.setState(newData);
