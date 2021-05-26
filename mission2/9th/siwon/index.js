import TodoList from './TodoList.js';

const data1 = [
    {
        text: 'JS 공부하기',
        isCompleted: false
    },
    {
        text: 'JS 복습하기',
        isCompleted: false
    }
];

const data2 = [
    {
        text: '낮잠자기',
        isCompleted: false
    },
    {
        text: '텀프 제출하기',
        isCompleted: true
    }
];

const data3 = [
    {
        text: '낮잠 또 자기',
        isCompleted: true
    },
    {
        text: '넷플릭스 보기',
        isCompleted: false
    }
];

new TodoList(data1, "#todo-list");
new TodoList(data2, "#todo-day");
new TodoList(data3, "#todo-week");
