import { TodoList } from './todolist.js';
import {todoData, todayTodoData, tomorrowTodoData} from './todoData.js';

(() => {
  const todoListElement = document.querySelector('#todo-list');
  const todayTodoListElement = document.querySelector('#todo-list-today');
  const tomorrowTodoListElement = document.querySelector('#todo-list-tomorrow');

  const TodoListComponent = new TodoList(todoListElement, todoData);
  const todayTodoListComponent = new TodoList(todayTodoListElement, todayTodoData);
  const tomorrowTodoListComponent = new TodoList(tomorrowTodoListElement, tomorrowTodoData);
})()
