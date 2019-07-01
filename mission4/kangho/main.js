import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import TodoCount from './TodoCount.js';
import App from './app.js';
import API from './api.js';




const app = new App(
  document.querySelector('#app'),
  new API('http://todo-api.roto.codes'),
  new TodoList(document.querySelector("#todo-list")),
  new TodoForm(
    document.querySelector('#todo-input'),
    document.querySelector('#todo-form'),
    document.querySelector('#remove-todo-button'),
  ),
  new TodoCount(
    document.querySelector('#todo-count'),
  ),
);
