import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';
import { proxyState } from './utils.js';
import LocalStorageService from './localStorageService.js';

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
  constructor($wrapper, props, todoList, todoInput, todoCount) {
    this.todoList = todoList;
    this.todoInput = todoInput;
    this.todoCount = todoCount;
    this.$wrapper = $wrapper;
    this.state = {
      todoListData: [],
      ...props,
    }

    this.init = this.init.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeAllTodo = this.removeAllTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.init();
  }

  init() {
    this.state = proxyState(this.state, this, {
      todoListData: this.handler.bind(this),
    });
    this.$wrapper.addEventListener('removeAllTodo', this.removeAllTodo);
    this.$wrapper.addEventListener('addTodo', this.addTodo);
    this.$wrapper.addEventListener('toggleTodo', this.toggleTodo);
    this.$wrapper.addEventListener('removeTodo', this.removeTodo);
  }

  handler() {
    this.todoList.setState({todoList: this.state.todoListData});
    this.todoCount.setState(this.filterList());
  }

  filterList() {
    return {
      totalTodo: this.state.todoListData.length,
      completedTodo: this.state.todoListData.filter(elem => elem.isCompleted).length,
    }
  }

  addTodo($event) {
    const { todo } = $event.detail;
    this.setState({
      todoListData: [
        ...this.state.todoListData,
        todo,  
      ],
    });
  }

  removeAllTodo() {
    this.setState({
      todoListData: [],
    });
  }

  removeTodo($event) {
    const { key } = $event.detail;
    this.setState({
      todoListData: this.state.todoListData.filter((elem, idx) => idx !== parseInt(key)),
    });
  }

  toggleTodo($event) {
    const { key } = $event.detail;
    this.setState({
      todoListData: this.state.todoListData.map((elem, idx) => {
        if (idx === parseInt(key)) {
          elem.isCompleted = !elem.isCompleted;
        }
        return elem;
      })
    });
  }

  setState(data) {
    Object.keys(data).forEach(key => {
      this.state[key] = data[key];
    });
    localStorageService.set('todo-app', this.state);
    this.render();
  };

  render() {
  }
}

const localStorageService = new LocalStorageService();
const app = new App(
  document.querySelector('#app'),
  localStorageService.get('todo-app'),
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
