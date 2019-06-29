import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';

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
  constructor($wrapper, todoList, todoInput, todoCount) {
    this.todoList = todoList;
    this.todoInput = todoInput;
    this.todoCount = todoCount;
    this.data = data;
    this.$wrapper = $wrapper;

    this.addList = this.addList.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  init() {
    this.todoList.init(this.data);
    this.todoInput.init();
    this.todoCount.init(this.filterList());

    this.$wrapper.addEventListener('removeAll', this.removeAll);
    this.$wrapper.addEventListener('addTodo', this.addList);
    this.$wrapper.addEventListener('toggleTodo', this.toggleTodo);
  }

  filterList() {
    return {
      totalTodo: this.data.length,
      completedTodo: this.data.filter(elem => elem.isCompleted).length,
    }
  }

  addList($event) {
    this.data.push($event.detail.todo);
    this.todoCount.setState(this.filterList());
    this.todoList.setState(this.data);
  }

  removeAll() {
    this.data = [];
    this.todoCount.setState(this.filterList());
    this.todoList.setState(this.data);
  }

  removeTodo($event) {
    const { text } = $event.detail;
    this.data = this.data.filter(elem => elem.text !== text);
    this.todoCount.setState(this.filterList());
    this.todoList.setState(this.data);
  }

  toggleTodo($event) {
    const { text } = $event.detail;
    this.data.forEach((elem) => {
      if (elem.text === text) {
        elem.isCompleted = !elem.isCompleted;
      }
    });
    this.data = [ ...this.data ];
    this.todoCount.setState(this.filterList());
    this.todoList.setState(this.data);
  }
  
}


const app = new App(
  document.querySelector('#app'),
  new TodoList(document.querySelector("#todo-list")),
  new TodoInput(
    document.querySelector('#todo-input'),
    document.querySelector('#add-todo-button'),
    document.querySelector('#remove-todo-button'),
  ),
  new TodoCount(
    document.querySelector('#todo-count'),
  ),
);

app.init();
