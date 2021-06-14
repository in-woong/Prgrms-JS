const items = [
  { text: "2week study", isCompleted: true },
  { text: "3week study", isCompleted: false },
];

const items2 = [
  { text: "brackfast", isCompleted: false },
  { text: "lunch", isCompleted: false },
];

const todoList = new TodoList(document.querySelector("main"), items);
const todoList2 = new TodoList(document.querySelector("main"), items2);

setTimeout(function () {
  todoList.setState([
    { text: "open", isCompleted: true },
    { text: "close", isCompleted: false },
  ]);
}, 3000);
