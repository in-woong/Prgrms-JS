import Users from './Users.js';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import Loading from './Loading.js';

import { todoAPI, userAPI } from '../api/index.js';
import { createDOMElement } from '../utils/index.js';
import { MY_USER_NAME } from '../constant/index.js';

export default function App({ $root, initialState }) {
  this.$root = $root;
  this.todoOnDragStart = null;

  this.state = initialState;

  this.init = async () => {
    loading.setState(true);
    try {
      this.state.currentUser = MY_USER_NAME;
      this.state.todos = await todoAPI.getTodoList();
      this.state.users = await userAPI.getUsers();
      completedTodoList.setState(this.state.todos, this.state.currentUser);
      uncompletedTodoList.setState(this.state.todos, this.state.currentUser);
      todoCount.setState(this.state.todos);
      users.setState(this.state.users);
    } catch (error) {
      console.error(error);
    } finally {
      loading.setState(false);
    }
  };

  this.updateOnDragStart = (newSelectedTodo) => {
    this.todoOnDragStart = newSelectedTodo;
  };

  this.updateOnDrop = async (newSelected) => {
    if (
      this.todoOnDragStart.dataset.completed === newSelected.dataset.completed
    ) {
      return;
    }
    await todoAPI.toggleComplete(this.todoOnDragStart.id);
    this.setState(await todoAPI.getTodoList(), this.state.currentUser);
  };

  this.setState = (nextState, nextUserName) => {
    this.state.todos = nextState;
    this.state.currentUser = nextUserName;
    completedTodoList.setState(this.state.todos, this.state.currentUser);
    uncompletedTodoList.setState(this.state.todos, this.state.currentUser);
    todoCount.setState(this.state.todos);
  };

  this.getTodo = async (userName) => {
    loading.setState(true);
    try {
      this.setState(await todoAPI.getTodoList(userName), userName);
    } catch (error) {
      console.error(error);
    } finally {
      loading.setState(false);
    }
  };

  this.addTodo = async (content) => {
    await todoAPI.addTodo(content);
    this.setState(await todoAPI.getTodoList());
  };

  this.deleteTodo = async (todoId) => {
    await todoAPI.deleteTodo(todoId);
    this.setState(await todoAPI.getTodoList());
  };

  this.deleteTodoAll = async () => {
    await todoAPI.deleteTodoAll();
    this.setState(await todoAPI.getTodoList());
  };

  this.toggleComplete = async (todoId) => {
    await todoAPI.toggleComplete(todoId);
    this.setState(await todoAPI.getTodoList(), this.state.currentUser);
  };

  const users = new Users({
    $root: this.$root,
    createDOMElement: createDOMElement,
    initialState: this.state.users,
    searchTodoList: this.getTodo,
  });

  const todoInput = new TodoInput({
    $root: this.$root,
    createDOMElement: createDOMElement,
    addTodo: this.addTodo,
    deleteTodoAll: this.deleteTodoAll,
  });

  const loading = new Loading({
    $root: this.$root,
    createDOMElement: createDOMElement,
  });

  const completedTodoList = new TodoList({
    $root: this.$root,
    createDOMElement: createDOMElement,
    initialState: this.state.todos,
    currentUser: this.state.currentUser,
    deleteTodo: this.deleteTodo,
    toggleComplete: this.toggleComplete,
    updateOnDragStart: this.updateOnDragStart,
    updateOnDrop: this.updateOnDrop,
    isCompleted: true,
  });

  const uncompletedTodoList = new TodoList({
    $root: this.$root,
    createDOMElement: createDOMElement,
    initialState: this.state.todos,
    currentUser: this.state.currentUser,
    deleteTodo: this.deleteTodo,
    toggleComplete: this.toggleComplete,
    updateOnDragStart: this.updateOnDragStart,
    updateOnDrop: this.updateOnDrop,
    isCompleted: false,
  });

  const todoCount = new TodoCount({
    $root: this.$root,
    createDOMElement: createDOMElement,
    initialState: this.state.todos,
  });
}
