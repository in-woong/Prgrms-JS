import { App } from './components/App.js';

const data = [{
    text: '아무것도 안하기',
    isCompleted: true,
},
{
    text: '아무거나 하기',
    isCompleted: false,
},
]

const app = new App(document.querySelector('#app'));
app.addTodoList(data);
