import App from './App.js';
import * as TodoApi from './TodoApi.js';

const $target = document.querySelector('.App');

const $target2 = document.querySelector('.App2');
console.log($target2);
// const state = {
//     username: 'jungsu',
//     todoList: [],
// };

// 이것도 실패
// const getUserTodoList = async () =>  {
//     const userTodoList = await TodoApi.getTodoList(state.username); 
//     return userTodoList ? userTodoList : [];
// }

// state.todoList = await getUserTodoList();

const app = new App({
    $target,
    // state,
})


const app2 = new App({
    $target: $target2,
    // state,
})