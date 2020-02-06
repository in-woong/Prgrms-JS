const items1 = [
  { text: 'JS 공부하기', isCompleted: false },
  { text: 'JS 복습하기', isCompleted: false },
];
const items2 = [
  { text: 'JS 공부하기2', isCompleted: true },
  { text: 'JS 복습하기2', isCompleted: false },
];
const items3 = [
  { text: 'JS 공부하기3', isCompleted: false },
  { text: 'JS 복습하기3', isCompleted: true },
];
const next1 = [
  { text: 'JS 공부하기', isCompleted: true },
  { text: 'JS 복습하기', isCompleted: true },
];
const next2 = [
  { text: 'JS 공부하기2', isCompleted: true },
  { text: 'JS 복습하기2', isCompleted: true },
];
const next3 = [
  { text: 'JS 공부하기3', isCompleted: false },
  { text: 'JS 복습하기3', isCompleted: true },
];

const exampleData = [
  { items: items1, target: 'todo-list1', next: next1 },
  { items: items2, target: 'todo-list2', next: next2 },
  { items: items3, target: 'todo-list3', next: next3 },
];

exampleData.forEach((todo) => {
  const todoList = new TodoList(todo.items, todo.target);
  todoList.render();

  setTimeout(() => {
    todoList.setState(todo.next);
  }, 2000);
});
