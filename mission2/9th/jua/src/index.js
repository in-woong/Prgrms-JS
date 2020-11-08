import TodoInput from './TodoInput.js';
import App from './App.js';

const app = new App();

const $todoForm = document.querySelector('.todo-form');
const $todoInput = document.querySelector('.todo-input');

const todoInput = new TodoInput($todoInput, $todoForm, app);
