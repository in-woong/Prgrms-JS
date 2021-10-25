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

const todoInput = document.querySelector("#input");
const addValue = function() {
  const inputValue = document.getElementById("input").value;
  data = [{text: inputValue, isCompleted: false}, ...data];
  todoList.setState(data);
}
todoInput.addEventListener("keypress", () => addValue());