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

    this.addTodo = this.addTodo.bind(this);
    this.removeAllTodo = this.removeAllTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  init() {
    this.todoList.init(this.data);
    this.todoInput.init();
    this.todoCount.init(this.filterList());

    this.$wrapper.addEventListener('removeAllTodo', this.removeAllTodo);
    this.$wrapper.addEventListener('addTodo', this.addTodo);
    this.$wrapper.addEventListener('toggleTodo', this.toggleTodo);
    this.$wrapper.addEventListener('removeTodo', this.removeTodo);
  }

  filterList() {
    return {
      totalTodo: this.data.length,
      completedTodo: this.data.filter(elem => elem.isCompleted).length,
    }
  }

  addTodo($event) {
    this.data.push($event.detail.todo);
    this.todoCount.setState(this.filterList());
    this.todoList.setState(this.data);
  }

  removeAllTodo() {
    this.data = [];
    this.todoCount.setState(this.filterList());
    this.todoList.setState(this.data);
  }

  removeTodo($event) {
    const { key } = $event.detail;
    this.data = this.data.filter((elem, idx) => idx !== parseInt(key));
    this.todoCount.setState(this.filterList());
    this.todoList.setState(this.data);
  }

  toggleTodo($event) {
    const { key } = $event.detail;
    this.data = this.data.map((elem, idx) => {
      if (idx === parseInt(key)) {
        elem.isCompleted = !elem.isCompleted;
      }
      return elem;
    });
    this.todoCount.setState(this.filterList());
    this.todoList.setState(this.data);
  }
  
}


const app = new App(
  document.querySelector('#app'),
  new TodoList(document.querySelector("#todo-list")),
  new TodoInput(
    document.querySelector('#todo-input'),
    document.querySelector('#todo-form'),
    document.querySelector('#remove-todo-button'),
  ),
  new TodoCount(
    document.querySelector('#todo-count'),
  ),
);

app.init();
