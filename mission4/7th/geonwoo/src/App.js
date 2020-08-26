import UserList from './components/UserList.js';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import TodoUser from './components/TodoUser.js';
import * as apis from './apis/index.js';

const USER_NAME = 'geonwoo';

class App {
  constructor(target) {
    this.$target = target;
    this.state = {
      users: [],
      nowUser: '',
      willTodos: [],
      completedTodos: [],
    };

    this.UserList = new UserList(
      document.querySelector('#user-list'),
      this.loadUserTodoList
    );
    this.TodoInput = new TodoInput(
      document.querySelector('#todo-input'),
      this.addUserTodo
    );
    this.WillTodo = new TodoList(
      document.querySelector('#will-todo'),
      this.state.willTodos,
      this.todoListEvent,
      this.onToggle
    );
    this.CompletedTodo = new TodoList(
      document.querySelector('#completed-todo'),
      this.state.completedTodos,
      this.todoListEvent,
      this.onToggle
    );
    this.TodoUser = new TodoUser(
      document.querySelector('#todo-user'),
      this.state.nowUser
    );

    this.loadAllUsers();
  }

  setState = (newState) => {
    this.state = newState;
    this.render();
  };

  render = () => {
    this.UserList.setState(this.state.users);
    this.TodoUser.setState(this.state.nowUser);
    this.WillTodo.setState(this.state.willTodos);
    this.CompletedTodo.setState(this.state.completedTodos);
  };

  // 유저 불러오기
  loadAllUsers = async () => {
    try {
      const users = await apis.loadAllUsers();
      this.setState({ ...this.state, users });
    } catch (e) {
      console.error(e);
    }
  };

  // 투두리스트 불러오기
  loadUserTodoList = async (userName) => {
    try {
      const todos = await apis.loadUserTodoList(userName);
      const willTodos = todos.filter((todo) => !todo.isCompleted);
      const completedTodos = todos.filter((todo) => todo.isCompleted);
      this.setState({
        ...this.state,
        nowUser: userName,
        willTodos,
        completedTodos,
      });
    } catch (e) {
      console.error(e);
    }
  };

  //
  addUserTodo = async (target) => {
    try {
      await apis.addUserTodo(USER_NAME, target.value);
      await this.loadUserTodoList(USER_NAME);
      target.value = '';
      target.focus();
    } catch (e) {
      console.error(e.message);
    }
  };

  onToggle = async (todoId) => {
    try {
      await apis.toggleUserTodo(USER_NAME, todoId);
    } catch (e) {
      console.error(e);
    }
  };
  onDelete = async (todoId) => {
    try {
      await apis.deleteUserTodo(USER_NAME, todoId);
    } catch (e) {
      console.error(e);
    }
  };

  todoListEvent = async (e) => {
    if (e.target.tagName === 'UL') return;
    let todoId;
    try {
      if (e.target.tagName === 'BUTTON') {
        todoId = e.target.parentNode.id;
        await this.onDelete(todoId);
      } else {
        todoId = e.target.id;
        await this.onToggle(todoId);
      }
      await this.loadUserTodoList(USER_NAME);
    } catch (e) {
      console.error(e.message);
    }
  };
}

export default App;
