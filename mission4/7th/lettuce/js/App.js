import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';
import Loader from './Loader.js';
import Users from './Users.js';
import {
  fetchTodoListFromServer,
  addTodoToServer,
  deleteTodoById,
  toggleTodoById,
} from './api.js';
import { DEFAULT_USER_NAME, preventDefaultEvent } from './utils.js';

function App() {
  if (!(this instanceof App)) {
    throw new Error("Create instance with 'new'");
  }

  this.$target = document.querySelector('#App');
  this.data = [];
  this.userName = DEFAULT_USER_NAME;

  this.setState = async (nextUserName) => {
    this.userName = nextUserName;
    this.loaderComponent.show();
    this.data = await fetchTodoListFromServer(this.userName);
    this.loaderComponent.hide();
    this.render();
    this.initComponents();
  };

  this.render = () => {
    this.$target.innerHTML = `
      <h1>${this.userName}'s TodoList</h1>
      <div class="loader" hidden></div>
      <section id="todoUsers"></section>
      <div id="todoInput"></div>
      <div id="todoList"></div>
      <div id="todoCount"></div>
    `;
  };

  this.addTodo = async (contentText) => {
    await addTodoToServer(this.userName, contentText);
    this.loaderComponent.show();
    this.data = await fetchTodoListFromServer(this.userName);
    this.loaderComponent.hide();
    this.todoListComponent.setState(this.data);
    this.todoCountComponent.setState(this.data);
  };

  this.deleteTodoById = (id) => {
    deleteTodoById(this.userName, id);
    const idx = this.data.findIndex(({ _id }) => _id === id);
    this.data.splice(idx, 1);
    this.todoListComponent.setState(this.data);
    this.todoCountComponent.setState(this.data);
  };

  this.toggleTodoById = (id) => {
    toggleTodoById(this.userName, id);
    const idx = this.data.findIndex(({ _id }) => _id === id);
    this.data[idx].isCompleted = !this.data[idx].isCompleted;
    this.todoListComponent.setState(this.data);
    this.todoCountComponent.setState(this.data);
  };

  this.removeAll = () => {
    this.data.map(({ _id }) => deleteTodoById(this.userName, _id));
    this.data = [];
    this.todoListComponent.setState(this.data);
    this.todoCountComponent.setState(this.data);
  };

  this.blockUserInteraction = () => {
    this.$target.style = 'pointer-events: none;';
    this.$target.addEventListener('keydown', preventDefaultEvent);
  };

  this.unblockUserInteraction = () => {
    this.$target.style = 'pointer-events: auto;';
    this.$target.removeEventListener('keydown', preventDefaultEvent);
  };

  this.initComponents = () => {
    this.loaderComponent = new Loader(document.querySelector('.loader'), {
      onShow: this.blockUserInteraction,
      onHide: this.unblockUserInteraction,
    });
    this.usersComponent = new Users(
      document.querySelector('#todoUsers'),
      (nextUserName) => this.setState(nextUserName)
    );

    this.todoListComponent = new TodoList(
      document.querySelector('#todoList'),
      this.data,
      (id) => this.toggleTodoById(id),
      (id) => this.deleteTodoById(id)
    );

    this.todoInputComponent = new TodoInput(
      document.querySelector('#todoInput'),
      (contentText) => this.addTodo(contentText),
      this.removeAllEvent
    );

    this.todoCountComponent = new TodoCount(
      document.querySelector('#todoCount'),
      this.data
    );
  };

  this.bindEvents = () => {
    this.removeAllEvent = new CustomEvent('removeAll', {
      bubbles: true,
      detail: { removeAll: () => this.removeAll() },
    });

    this.$target.addEventListener('removeAll', (event) => {
      event.detail.removeAll();
    });
  };

  this.bindEvents();

  this.render();
  this.initComponents();

  this.setState(this.userName);
}

export default App;
