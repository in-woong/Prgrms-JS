import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import validator from './validate.js';
import { storage } from './util.js';

function App() {
  this.listTodos = [];

  this.init = () => {
    this.getLocalStorage();

    this.todoInput = new TodoInput(this.addTodo, this.customEvent);
    this.todoList = new TodoList(this.toggleTodo, this.removeTodo, this.removeAllTodo);
    this.todoCount = new TodoCount(this.listTodos);

    this.render();
  }

  this.customEvent = (event) => {
    this.todoList.$list.dispatchEvent(event);
  }

  this.syncLocalStorage = () => {
    storage.set('todolist', JSON.stringify(this.listTodos));
  }

  this.getLocalStorage = () => {
    try {
      const data = storage.get('todolist');
      this.listTodos = validator.isValidData(JSON.parse(data));
    } catch (err) {
      this.listTodos = [];
    }
  }

  this.removeAllLocalData = () => {
    localStorage.removeItem('todolist');
  }

  this.addTodo = (newTodo) => {
    this.listTodos.push(newTodo);
    this.syncLocalStorage();
    this.render();
  }

  this.toggleTodo = (idx, nodeName) => {
    this.listTodos[idx].isCompleted = !this.listTodos[idx].isCompleted;
    this.syncLocalStorage();
    this.todoList.toggleNode(idx, nodeName);
    this.todoCount.render();
  }

  this.removeTodo = (idx) => {
    this.listTodos.splice(idx, 1);
    this.syncLocalStorage();
    this.todoList.removeNode(idx);
    this.todoCount.render();
  }

  this.removeAllTodo = () => {
    this.listTodos.splice(0, this.listTodos.length);
    this.removeAllLocalData();
    this.render();
  }

  this.render = () => {
    this.todoList.setState(this.listTodos);
    this.todoCount.render();
  }

  if (validator.isValidInstance(this, App))
    this.init();
}

export default App;
