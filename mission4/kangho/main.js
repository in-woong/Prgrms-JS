import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import TodoCount from './TodoCount.js';
import StorageService from './StorageService.js';
import App from './app.js';

const initialTodoList = [
  {
    text: "JavaScript 문서 읽기",
    isCompleted: false,
  },
  {
    text: "로토에게 질문하기",
    isCompleted: false,
  },
  {
    text: "Pull Request 만들기",
    isCompleted: false,
  },
  {
    text: "Slack 접속하기",
    isCompleted: true,
  },
];


const storageService = new StorageService(window.localStorage);
const app = new App(
  document.querySelector('#app'),
  storageService.get('todo-app') || { todoListData: initialTodoList },
  storageService,
  new TodoList(document.querySelector("#todo-list")),
  new TodoForm(
    document.querySelector('#todo-input'),
    document.querySelector('#todo-form'),
    document.querySelector('#remove-todo-button'),
  ),
  new TodoCount(
    document.querySelector('#todo-count'),
  ),
);
