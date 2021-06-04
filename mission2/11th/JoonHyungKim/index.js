import { App } from './components/App.js';

const data = JSON.parse(localStorage.getItem('todo')) || [];

const app = new App(document.querySelector('#app'));
app.addTodoList(data);
