import TodoInput from "./Components/todoInput.js";
import TodoList from "./Components/todoList.js";

export const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

function App() {
  document.querySelector('#app').innerHTML = '<div id="todo-list"></div><div id="todo-input"></div>'
  new TodoList(document.querySelector('#todo-list'), data)
  new TodoInput(document.querySelector('#todo-input'))
}
new App();