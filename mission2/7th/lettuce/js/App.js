import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';
import { isValidTask } from './utils.js';
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from './TodoStorage.js';

function App() {
  if (!(this instanceof App)) {
    throw new Error("Create instance with 'new'");
  }

  this.$target = document.querySelector('#App');
  this.data = getDataFromLocalStorage();

  this.render = function () {
    this.$target.innerHTML = `
      <div id="todoInput"></div>
      <section id="todoList"></section>
      <div id="todoCount"></div>
    `;
  };

  this.addTask = function (task) {
    if (!isValidTask(task)) {
      throw new Error('wrong task');
    }
    this.data.push(task);
    this.todoListComponent.setState(this.data);
    this.todoCountComponent.setState(this.data);
    setDataToLocalStorage(this.data);
  };

  this.deleteTaskByIdx = function (idx) {
    this.data.splice(idx, 1);
    this.todoListComponent.setState(this.data);
    this.todoCountComponent.setState(this.data);
    setDataToLocalStorage(this.data);
  };

  this.toggleTaskByIdx = function (idx) {
    this.data[idx].isCompleted = !this.data[idx].isCompleted;
    this.todoListComponent.setState(this.data);
    this.todoCountComponent.setState(this.data);
    setDataToLocalStorage(this.data);
  };

  this.removeAll = function () {
    this.data = [];
    this.todoListComponent.setState(this.data);
    this.todoCountComponent.setState(this.data);
    setDataToLocalStorage(this.data);
  };

  this.removeAllEvent = new CustomEvent('removeAll', {
    bubbles: true,
    detail: { removeAll: () => this.removeAll() },
  });

  this.$target.addEventListener('removeAll', (event) => {
    event.detail.removeAll();
  });

  this.render();

  this.todoListComponent = new TodoList(
    document.querySelector('#todoList'),
    this.data,
    (idx) => this.toggleTaskByIdx(idx),
    (idx) => this.deleteTaskByIdx(idx)
  );

  this.todoInputComponent = new TodoInput(
    document.querySelector('#todoInput'),
    (task) => this.addTask(task),
    this.removeAllEvent
  );

  this.todoCountComponent = new TodoCount(
    document.querySelector('#todoCount'),
    this.data
  );
}

export default App;
