import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';

const data = [
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

class App {
  constructor(todoList, todoInput, data) {
    this.todoList = todoList;
    this.todoInput = todoInput;
    this.data = data;

    this.addList = this.addList.bind(this);
  }

  init() {
    this.todoList.init(this.data);
    this.todoInput.init(this.addList)
  }

  addList(todo) {
    this.data.push(todo);
    this.todoList.setState(this.data);
  }
  
}


const app = new App(
  new TodoList(document.querySelector("#todo-list")),
  new TodoInput(document.querySelector('#todo-input'), document.querySelector('#add-todo-button')),
  data,
);

app.init();
