import TodoList from './src/TodoList.js';
import TodoInput from './src/TodoInput.js';

const initialState = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

const $app = document.querySelector('#app');
const todoInput = new TodoInput($app, (todoText) => {
  const newData = [
    ...initialState,
    {
      text: todoText,
      isCompleted: false,
    },
  ];
  todoList.setState(newData);
});
const todoList = new TodoList($app, initialState);
