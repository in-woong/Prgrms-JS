const data = [
    {
        text: 'JS 공부하기',
        isCompleted: true,
    },
    {
        text: 'JS 복습하기',
        isCompleted: false,
    },
];

const algo_data = [
    {
        text: '트리 공부하기',
        isCompleted : true
    },
    {
        text: '해쉬맵 공부하기',
        isCompleted : false
    },
    {
        text: '그리디 공부하기',
        isCompleted : false
    }
];

const chores_data = [
    {
        text: '방 청소하기',
        isCompleted : true
    },
    {   
        text: '빨래 하기',
        isCompleted : false
    }
];

const $todoElem = document.querySelector('#todo-list');
const $algo_todoElem = document.querySelector('#algorithm-todo-list');
const $chores_todoElem = document.querySelector('#chores-todo-list');

const todoList = new TodoList(data,$todoElem);
const algo_todoList = new TodoList(algo_data, $algo_todoElem);
const chores_todoList = new TodoList(chores_data, $chores_todoElem);

todoList.setState(algo_data);