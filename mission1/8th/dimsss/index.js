import { TodoList } from './todolist.js';
import todo from './todo.js';

(() => {
  const todoListElement = document.querySelector('#todo-list');
  const TodoListComponent = new TodoList(todoListElement, todo);

  TodoListComponent.render();
})()
