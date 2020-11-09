import App from './App.js';
import TodoList from './TodoList.js';

let data = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: true
    },
    {
        text: '낮잠자기',
        isCompleted: false
    },
    {
        text: '텀프 제출하기',
        isCompleted: true
    },
];

const todoApp = new App(data);
