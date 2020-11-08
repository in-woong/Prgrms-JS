import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';

const data = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

const todoList = new TodoList(data, 'todo-list');

const $todoForm = document.querySelector('.todo-form');
const $todoInput = document.querySelector('.todo-input');

const todoInput = new TodoInput($todoInput, $todoForm, data, todoList);
