import TodoList from './TodoList.js'

const data = [
  {
    text: 'JS 공부하기',
    isCompleted: false
  },
  {
    text: 'JS 복습하기',
    isCompleted: false
  }
];

const $target = document.querySelector('#todo-list')

new TodoList(data, $target)
