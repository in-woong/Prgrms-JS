var data = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

const $target = document.querySelector('#todo-list');
const todoList = new TodoList({ $target, initialState: data });

const $input = document.querySelector('#todo-input');
const $button = document.querySelector('#todo-button');
const todoInput = new TodoInput({ $input, $button, todoList });
