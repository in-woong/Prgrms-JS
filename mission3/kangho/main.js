import TodoList from './TodoList.js';

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
  constructor(todoList) {
    this.todoList = todoList;
  }

  init() {
    this.todoList.setState(data);
    document
      .querySelector("#add-todo-button")
      .addEventListener("click", () => {
        const todoText = document.querySelector("#todo-input").value;

        if (todoText.length > 0) {
          data.push({
            text: todoText,
            isCompleted: false,
          });

          this.todoList.setState(data);
        }
      });
  }
}


const app = new App(
  new TodoList(document.querySelector("#todo-list")),
);

app.init();
