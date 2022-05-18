import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';
import TodoUser from './components/TodoUser.js';

function App() {
  this.state = {
    todos: [],
    selectUser: 'jiyeonUm',
  };
  this.user = 'jiyeonUm';
  const app = document.querySelector('#App');
  const todoInputContainer = document.querySelector('#todoInputContainer');
  const todoListContainer = document.querySelector('#todoListContainer');
  const todoCountContainer = document.querySelector('#todoCountContainer');
  const userContainer = document.querySelector('#todoUserContainer');

  const todoList = new TodoList({
    initialState: this.state,
    todoListContainer,

    toggle: (msg, index) => {
      this.state.todos[index].isCompleted =
        !this.state.todos[index].isCompleted;
      msg === 'updated'
        ? this.setState(this.state)
        : new Error('다시 시도해 주세요');
    },
    getList: (list) => {
      this.state.todos = list;
      todoCount.setCount(this.state);
    },
    onDelete: (msg, index) => {
      this.state.todos.splice(index, 1);
      msg.slice(0, -1) === 'removed'
        ? this.setState(this.state)
        : new Error('다시 시도해 주세요');
    },
  });
  const todoInput = new TodoInput({
    initialState: this.state,
    todoInputContainer,
    onCreate: (data) => {
      this.state.todos.push(data);
      this.state.selectUser = 'jiyeonUm';
      this.setState(this.state);
    },
    removeAll: () => {
      this.state.todos = [];
      this.setState(this.state);
    },
  });
  const todoCount = new TodoCount(todoCountContainer, this.state);
  const todoUser = new TodoUser({
    initialState: this.state,
    container: app,
    loadUserId: (loadUser) => {
      this.state.selectUser = loadUser;
      this.setState(this.state);
    },
    loadUserTodo: (userTodo) => {
      this.state.todos = userTodo;
      this.setState(this.state);
    },
  });
  this.setState = function (state) {
    todoList.setState(state);
    todoCount.setCount(state);
  };
}

export default App;
