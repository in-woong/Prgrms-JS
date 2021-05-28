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
        text: '출근하기',
        isCompleted: true
    },

    {
        text: '일하기',
        isCompleted: true
    },
    {
        text: '퇴근하기',
        isCompleted: false
    }
]

const tomorrow_todo = [{
        text: '늦잠자기',
        isCompleted: false
    },
    {
        text: '방청소하기',
        isCompleted: false
    },
    {
        text: '출근 안하기',
        isCompleted: false
    }
]

const new_state = [{
    text: '아무것도 안하기',
    isCompleted: true
}]

const todoList = new TodoList(document.getElementById('todo-list'), data);
const todayTodoList = new TodoList(document.getElementById('todo-list-2'), today_todo);
const tomorrowTodoList = new TodoList(document.getElementById('todo-list-3'), tomorrow_todo);

todoList.render();
todayTodoList.render();
tomorrowTodoList.render();

setTimeout(() => {
    todoList.setState(new_state);
    todayTodoList.setState(new_state);
    tomorrowTodoList.setState(new_state);
}, 3000);
