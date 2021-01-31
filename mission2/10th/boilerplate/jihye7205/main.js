const data = [
  {
    text: "JS 공부하기",
    isCompleted: true,
  },
  {
    text: "JS 복습하기",
    isCompleted: false,
  }
];

const work = [
  {
    text: '배포하기',
    isCompleted: true
  },
  {
    text: '모니터링 하기',
    isCompleted: false
  }
];

const hobby = [
  {
    text: '과제 구현하기',
    isCompleted: true
  },
  {
    text: '스터디원들 코드 보기',
    isCompleted: false
  },
  {
    text: '정리하기',
    isCompleted: false
  }
];

const $target = document.querySelector("#todo-list");
const $target2 = document.querySelector("#todo-list2");
const $target3 = document.querySelector("#todo-list3");
const todoList = new TodoList($target, data);
const todoList2 = new TodoList($target2, work);
const todoList3 = new TodoList($target3, hobby);

