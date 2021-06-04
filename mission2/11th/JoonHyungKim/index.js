import { TodoList } from './components/TodoList.js';

const data = [{
    text: '아무것도 안하기',
    isCompleted: true,
},
{
    text: '아무거나 하기',
    isCompleted: false,
},
]

const app = document.querySelector('#app');
const todoList = new TodoList(app, data);
