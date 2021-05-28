import { TodoList } from './components/TodoList.js';

const data = [{
        text: 'JS 공부하기',
        isCompleted: true,
    },
    {
        text: 'JS 복습하기',
        isCompleted: false,
    },
]

const today_todo = [{
        text: '출근'
    },
    {
        text: '일하기'
    },
    {
        text: '퇴근하기'
    }
]

const tomorrow_todo = [{
        text: '늦잠자기'
    },
    {
        text: '방청소하기'
    },
    {
        text: '출근 안하기'
    }
]

const todoList = new TodoList(document.getElementById('todo-list'), data);
const todayTodoList = new TodoList(document.getElementById('todo-list-2'), today_todo);
const tomorrowTodoList = new TodoList(document.getElementById('todo-list-3'), tomorrow_todo);

todoList.render();
todayTodoList.render();
tomorrowTodoList.render();