import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import UserList from './UserList.js';

import {
  getTodoList,
  addTodo,
  removeTodo,
  toggleTodo,
  getUsers,
} from '../utils/api.js';
import { checkTarget, checkNode, checkAppState } from '../utils/validator.js';
import { SELECTOR, NODE, INIT_USER } from '../utils/constant.js';
import LoadingView from './LoadingView.js';

function App($target) {
  this.init = async () => {
    checkTarget($target);
    checkNode(NODE.MAIN);

    this.$target = $target;
    this.state = await this.getNextState(INIT_USER);
    this.isLoading = false;

    this.userList = new UserList({
      $target: this.$target.querySelector(SELECTOR.USER_LIST),
      users: this.state.users,
      chosenUser: this.state.chosenUser,
      onShowUserTodo: this.onShowUserTodo,
    });

    this.todoInput = new TodoInput({
      $target: this.$target.querySelector(SELECTOR.TODO_INPUT),
      onAddTodo: this.onAddTodo,
    });

    this.todoListRunning = new TodoList({
      $target: this.$target.querySelector(SELECTOR.TODO_LIST_RUNNING),
      todos: this.state.todos.filter(({ isCompleted }) => !isCompleted),
      onToggleTodo: this.onToggleTodo,
      onRemoveTodo: this.onRemoveTodo,
    });

    this.todoListCompleted = new TodoList({
      $target: this.$target.querySelector(SELECTOR.TODO_LIST_COMPLETED),
      todos: this.state.todos.filter(({ isCompleted }) => isCompleted),
      onToggleTodo: this.onToggleTodo,
      onRemoveTodo: this.onRemoveTodo,
    });

    this.todoCount = new TodoCount({
      $target: this.$target.querySelector(SELECTOR.TODO_COUNT),
      todoCounts: this.state.todoCounts,
    });

    this.loadingView = new LoadingView({
      $target: this.$target.querySelector(SELECTOR.LOADING_VIEW),
      isLoading: this.isLoading,
    });
  };

  this.onShowUserTodo = async (userName) => {
    try {
      this.isLoading = true;
      this.loadingView.setState(this.isLoading);

      const nextState = await this.getNextState(userName);

      this.isLoading = false;
      this.loadingView.setState(this.isLoading);

      this.setState(nextState);
    } catch (err) {
      console.error(err);
    }
  };

  this.onAddTodo = async (content) => {
    try {
      await addTodo(this.state.chosenUser, content);
      const nextState = await this.getNextState(this.state.chosenUser);

      this.setState(nextState);
    } catch (err) {
      console.error(err);
    }
  };

  this.onToggleTodo = async (todoId) => {
    try {
      await toggleTodo(this.state.chosenUser, todoId);
      const nextState = await this.getNextState(this.state.chosenUser);

      this.setState(nextState);
    } catch (err) {
      console.error(err);
    }
  };

  this.onRemoveTodo = async (todoId) => {
    try {
      await removeTodo(this.state.chosenUser, todoId);
      const nextState = await this.getNextState(this.state.chosenUser);

      this.setState(nextState);
    } catch (err) {
      console.error(err);
    }
  };

  this.getNextState = async (userName) => {
    const todos = await getTodoList(userName);
    const users = await getUsers();
    const todoCounts = {
      total: todos.length,
      completed: todos.filter(({ isCompleted }) => isCompleted).length,
    };

    const nextState = {
      ...this.state,
      chosenUser: userName,
      users,
      todos,
      todoCounts,
    };

    return nextState;
  };

  this.setState = (nextState) => {
    checkAppState(nextState);
    this.state = nextState;

    this.userList.setState({
      users: this.state.users,
      chosenUser: this.state.chosenUser,
    });
    this.todoListRunning.setState(
      this.state.todos.filter((todo) => !todo.isCompleted)
    );
    this.todoListCompleted.setState(
      this.state.todos.filter((todo) => todo.isCompleted)
    );
    this.todoCount.setState(this.state.todoCounts);
  };

  this.init();
}

export default App;
