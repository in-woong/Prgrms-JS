var data = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];
var data2 = [
  {
    text: '빨래널기',
    isCompleted: true,
  },
  {
    text: '알리오올리오 만들기',
    isCompleted: true,
  },
];
var data3 = [
  {
    text: '취준하기',
    isCompleted: false,
  },
  {
    text: '일정짜기',
    isCompleted: false,
  },
];
const todoList = new TodoList(data, '#todo-list');
const todoList2 = new TodoList(data2, '#todo-list2');
const todoList3 = new TodoList(data3, '#todo-list3');
