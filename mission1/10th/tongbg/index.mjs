import TodoList from "./TodList.js";

const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const todoList = new TodoList(data);
todoList.render();
