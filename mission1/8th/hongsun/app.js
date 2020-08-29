import { data, csTodoData, jsTodoData, nextData } from './data.js';
import TodoList from './components/TodoList.js';

const todoList = new TodoList('todo-default-wrapper', data);
const csTodoList = new TodoList('todo-cs-wrapper', csTodoData);
const jsTodoList = new TodoList('todo-js-wrapper', jsTodoData);
todoList.render();
csTodoList.render();
jsTodoList.render();

setTimeout(() => {
  todoList.setState(nextData);
}, 3000);
