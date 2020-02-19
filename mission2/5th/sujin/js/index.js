import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import App from './App.js';

const data = [
    {
        text: '코딩하기'
    },
    {
        text: '집안 청소하기'
    }
]

const myTodoData = [
    {
        text: '미션 1 - 필수 구현사항',
        isCompleted: true
    },
    {
        text: '미션 1 - 보너스 구현사항 (에러체크)',
        isCompleted: false
    },
    {
        text: '미션 1 - 보너스 구현사항 (다중컴포넌트)',
        isCompleted: true
    },
    {
        text: '미션 1 - 보너스 구현사항 (삭선처리)',
        isCompleted: true
    },
    {
        text: '미션 1 - 보너스 구현사항 (setState)',
        isCompleted: true
    },
]

const workTodoData = [] //빈 값
const errData = '이상한값'  //배열이 아닌 값

const $todo = document.querySelector('#todo-list')
const $myTodo = document.querySelector('#myTodo-list')
const $workTodo = document.querySelector('#workTodo-list')

const todoList = new TodoList(data, $todo)
const myTodoList = new TodoList(myTodoData, $myTodo)
const workTodoList = new TodoList(workTodoData, $workTodo)

// new App(todoList).render()
new App(myTodoList).render()
// new App(workTodoList).render()