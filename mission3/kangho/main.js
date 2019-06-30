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
    this.$wrapper = $wrapper;

    this.state = {
      todoListData: data,
    }

    this.init = this.init.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeAllTodo = this.removeAllTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  init() {
    this.todoList.init(this.state.todoListData);
    this.todoInput.init();
    this.todoCount.init(this.filterList());

    this.state = new Proxy(this.state, {
      get: function(target, name) {
        return target[name];
      },

      set: function(obj, prop, newval) {
        obj[prop] = [...newval];
        if (prop === 'todoListData') {
          console.log('render');
          this.todoList.setState(newval);
          this.todoCount.setState(this.filterList(newval));  
        } 
        return true;
      }.bind(this)
    });

    this.$wrapper.addEventListener('removeAllTodo', this.removeAllTodo);
    this.$wrapper.addEventListener('addTodo', this.addTodo);
    this.$wrapper.addEventListener('toggleTodo', this.toggleTodo);
    this.$wrapper.addEventListener('removeTodo', this.removeTodo);
  }

  filterList() {
    return {
      totalTodo: this.state.todoListData.length,
      completedTodo: this.state.todoListData.filter(elem => elem.isCompleted).length,
    }
  }

  addTodo($event) {
    const { todo } = $event.detail;
    this.state.todoListData = [
      ...this.state.todoListData,
      todo,
    ];
  }

  removeAllTodo() {
    this.state.todoListData = [];
  }

  removeTodo($event) {
    const { key } = $event.detail;
    this.state.todoListData = this.state.todoListData.filter((elem, idx) => idx !== parseInt(key));
  }

  toggleTodo($event) {
    const { key } = $event.detail;
    this.state.todoListData = this.state.todoListData.map((elem, idx) => {
      if (idx === parseInt(key)) {
        elem.isCompleted = !elem.isCompleted;
      }
      return elem;
    });
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
