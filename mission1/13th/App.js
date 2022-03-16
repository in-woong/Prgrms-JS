import TodoList from "./TodoList.js";
import { firstTodoList, secondTodoList, thirdTodoList } from "./data.js";

const $firstTodoList = new TodoList({ $app: document.querySelector('#first-todo-list'), data: firstTodoList});
$firstTodoList.setState([
  ...$firstTodoList.data,
  {
    text: '프로그래머스 과제 풀기'
  }
]);

const $secondTodoList = new TodoList({ $app: document.querySelector('#second-todo-list'), data: secondTodoList});
$secondTodoList.setState([
  ...$secondTodoList.data,
  {
    text: '프로그래머스 과제 보너스 구현사항 풀기!!'
  }
]);

const $thirdTodoList = new TodoList({ $app: document.querySelector('#third-todo-list'), data: thirdTodoList});
$thirdTodoList.setState([
  ...$thirdTodoList.data,
  {
    text: '주니어킹으로 성장하기',
  }
]);
