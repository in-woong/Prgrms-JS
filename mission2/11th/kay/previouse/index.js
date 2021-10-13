// import TodoList from './TodoList.js';

const data = [
    {
    text: 'JS 공부하기',
    isCompleted: true
    },
    {
    text: 'JS 복습하기',
    isCompleted: false
    },
    {
    text: 'JS 예습하기',
    isCompleted: true
    }
]
const data2 = [
    {
    text: '영어 공부하기',
    isCompleted: false
    },
    {
    text: '일본어 공부하기',
    isCompleted: true
    },
    {
    text: '중국어 공부하기',
    isCompleted: false
    }
]
const data3 = [
    {
    text: '용과같이5 깨기',
    isCompleted: true
    },
    {
    text: '니드포스피드카본 깨기',
    isCompleted: false
    },
    {
    text: '에픽게임즈 지우기',
    isCompleted: true
    }
]
const data4 = [
    {
    text: '잠이나 퍼자기',
    isCompleted: false
    }
]

const todoList = new TodoList(data, '#todo-list');
const todoList2 = new TodoList(data2, '#todo-list2');
const todoList3 = new TodoList(data3, '#todo-list3');

todoList.render();
todoList2.render();
todoList3.render();
setTimeout(() => {todoList.setState(data4)}, 2000);




