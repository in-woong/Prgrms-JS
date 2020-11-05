import TodoList from './component/TodoList.js'
import TodoInput from './component/TodoInput.js'
import { data } from './data/data.js'


const todoList = new TodoList(data, 'todo-list');
new TodoInput('todo-input', todoList);

