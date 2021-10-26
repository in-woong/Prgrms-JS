//import { TodoList } from './TodoList.js';

let data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const todoList = new TodoList({
  state: data,
  $target: document.querySelector("#app")
});
todoList.render();


const todoInput = document.querySelector("#input");  // input 인스턴스 생성

todoInput.addEventListener("keyup", (e => {
  if (e.keyCode === 13) {    // 엔터 입력시 동작
    data = [{text: document.getElementById("input").value, isCompleted: false}, ...data];    //  data에 input값 추가
    todoList.setState(data);   //  state 변경
    document.getElementById("input").value = null;   // input 초기화
  }
}));