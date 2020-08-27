import { TodoList } from './todolist.js';
import todoData from './todoData.js';

(() => {
  const todoListElement = document.querySelector('#todo-list');
  const TodoListComponent = new TodoList(todoListElement, todoData);
})()
