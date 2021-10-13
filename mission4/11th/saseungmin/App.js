/* eslint-disable no-alert */
import Users from './Users.js';

import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoRemoveAll from './TodoRemoveAll.js';

import {
  fetchTodos, fetchToggleTodo, fetchDeleteTodo, fetchInsertTodo, fetchDeleteTodos, fetchUsers,
} from './api.js';

import { deleteTodo, toggleTodo } from './utils.js';

class App {
  constructor(state, name) {
    this.name = name;
    this.state = state;

    this.todoList = new TodoList({
      target: '#todo-list',
      onClick: async (id) => {
        try {
          await fetchToggleTodo({ id, username: this.name });

          this.setState(toggleTodo(this.state, id));
        } catch (error) {
          alert(error.message);
        }
      },
      onRemove: async (id) => {
        try {
          await fetchDeleteTodo({ id, username: this.name });

          this.setState(deleteTodo(this.state, id));
        } catch (error) {
          alert(error.message);
        }
      },
    });

    this.todoInput = new TodoInput({
      target: '#todo-input',
      onInsert: async (content) => {
        try {
          const newTodo = await fetchInsertTodo({ content, username: this.name });

          this.setState([...this.state, newTodo]);
        } catch (error) {
          alert(error.message);
        }
      },
    });

    this.todoRemove = new TodoRemoveAll({
      target: '#remove-all-todo-button',
      onClick: async () => {
        try {
          await fetchDeleteTodos(this.name);

          this.setState([]);
        } catch (error) {
          alert(error.message);
        }
      },
    });

    this.users = new Users({
      target: '#user-list',
      onClick: (userName) => {
        this.name = userName;

        this.loadTodos();
      },
    });

    this.init();
  }

  async loadUsers() {
    try {
      const users = await fetchUsers();

      this.users.render(users);
    } catch (error) {
      alert(error.message);
      this.users.render([]);
    }
  }

  async loadTodos() {
    this.todoList.renderLoading();

    try {
      const todos = await fetchTodos(this.name);

      this.setState(todos);
    } catch (error) {
      alert(error.message);
      this.setState([]);
    }
  }

  setState(nextState) {
    this.state = nextState;

    this.render();
  }

  render() {
    this.todoList.render(this.state);
    this.todoList.renderTodoTitle(this.name);
  }

  init() {
    this.loadTodos();
    this.loadUsers();
  }
}

export default App;
